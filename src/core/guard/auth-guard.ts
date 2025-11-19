import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userId = localStorage.getItem('userId');

  console.log(state);
  console.log(route);


  if (userId) return true;

  else {
    if (state.url !== '/zomato') {
      localStorage.setItem('toastMessage', JSON.stringify({
        severity: 'warn',
        summary: 'Warn',
        detail: 'You must login to access this page! Look at The Bottom of the page to SignUp'
      }));
      console.log(localStorage.getItem('toastMessage'));
    }
    return false;// prevent navigate 
  }
};



