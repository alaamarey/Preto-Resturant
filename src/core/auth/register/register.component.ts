import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { phoneNumberValidator } from './phoneNumberValidator';
import { ValidatorComponent } from "./components/validator/validator.component";
import { RegisterService } from './services/register.service';
import { finalize, Subject, Subscription, takeUntil } from 'rxjs';
import { ProgressSpinner } from 'primeng/progressspinner';



@Component({
  selector: 'app-register',
  imports: [IftaLabelModule, FloatLabelModule, ProgressSpinner , DatePickerModule, PasswordModule, AutoCompleteModule, InputNumberModule, CheckboxModule, ButtonModule, ReactiveFormsModule, ValidatorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit , OnDestroy {

  private readonly fb = inject(FormBuilder);
  private readonly registerService = inject(RegisterService);

  registerForm !: FormGroup;
  message: WritableSignal<string | null> = signal('');
  register$ = new Subscription(); 
  isCallApi = signal(false);


  ngOnInit(): void {
    this.initForm();
    console.log(this.registerForm.value);
  }


  initForm() {
    this.registerForm = this.fb.group({
      userId: [0],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      role: ['user'],
      password: ['', [Validators.required, Validators.pattern(/^(?=.{8,}$)(?=.*[A-Za-z])(?=.*\d).*$/)]],
      mobileNo: ['', [Validators.required, phoneNumberValidator]],
      emailId: ['', [Validators.required, Validators.email]],
      restaurantId: [0]
    })
  }


  registerFormFn(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      if (this.register$) this.register$.unsubscribe();
      this.isCallApi.set(true)
     this.register$ = this.registerService.signUp(this.registerForm.value).pipe(finalize( () => this.isCallApi.set(false))).subscribe({
        next: (response => {
           console.log(response);
           if (response.result === false) {
            this.message.set(response.message);
           } else {
            localStorage.setItem('userId' ,  JSON.stringify( response.data.userId ))
             this.message.set(response.message); 
          }
          this.registerForm.reset ;
        })
      })
    } else {
      this.registerForm.markAllAsTouched();
    }
  }


  ngOnDestroy(): void {
    this.register$.unsubscribe();
  }





}
