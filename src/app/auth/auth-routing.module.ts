import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    data: { animation: 'login' }
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
    data: { animation: 'registro' }
  },
  {
    path: 'verification-email',
    loadChildren: () => import('./pages/send-email/send-email.module').then(m => m.SendEmailModule)
  },
  {
    path: 'pass-email-incorrecto',
    loadChildren: () => import('./pages/user-pass-incorrecto/user-pass-incorrecto.module').then(m => m.UserPassIncorrectoModule)
  },
  {
    path: 'permisoDenegado',
    loadChildren: () => import('./pages/permiso-denegado/permiso-denegado.module').then(m => m.PermisoDenegadoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
