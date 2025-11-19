import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService, TreeNode } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { ValidatorComponent } from "../../core/auth/register/components/validator/validator.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { Toast } from "primeng/toast";
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-groupingbooking',
  imports: [ButtonComponent, ReactiveFormsModule, RouterLink, AnimateOnScroll ,InputTextModule,  DatePicker, InputNumber, TreeSelectModule, IftaLabelModule, ButtonModule, FormsModule, ValidatorComponent, Toast],
  templateUrl: './groupingbooking.component.html',
  styleUrl: './groupingbooking.component.css',
})
export class GroupingbookingComponent {


private readonly fb = inject(FormBuilder);
private readonly messageService = inject(MessageService);

bookingGroupForm ! : FormGroup  ; 
  
  
  groupingBooking: WritableSignal<TreeNode<string>[] | undefined> = signal([])


  ngOnInit(): void {
 
 
    this.groupingBooking.set([ 
    { label: 'LARGE GROUP BOOKING ', key: '0 '},
    { label: 'PRIVATE DINING ROOM ', key: '1' },
    { label: 'FULL VENUE HIRE ', key: '2' },
    { label: 'OTHER', key: '3' }
])
this.initForm()
  }




  initForm() :void {
this.bookingGroupForm = this.fb.group({
  name : ['' ,[Validators.required]],
  email:['' ,[Validators.required , Validators.email]],
  date : ['' , [Validators.required]],
  numberOfPeople :['' ,Validators.required],
  groupBookingTYpe:['',Validators.required],
  message :['']
})}







submit():void {
  if( this.bookingGroupForm.valid ){
    console.log(this.bookingGroupForm); 
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Your BOOKING is registered successfully'});
  }else{
    this.bookingGroupForm.markAllAsTouched()
  }
}











}
