import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const ngxSpinnerService = inject(NgxSpinnerService) ;
  const router = inject(Router);

  const url = router.url ;
  

  // request that go to the backend server
 
  if( ! (url.includes('/zomato')) ){
    ngxSpinnerService.show();
  }
  


     // next::return response from backend server
  return next(req).pipe(
    finalize( () =>   
      setInterval(() => {
         ngxSpinnerService.hide() 
      },1000)
    )
  );
};

