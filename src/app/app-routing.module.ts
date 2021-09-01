import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'register',
    component: RegistrationComponent 
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AdminComponent
      },
      {
        path: 'user/:id',
        component: UserComponent
      }
    ]
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // },
  // {
  //   path: 'admin/user/:id',
  //   component: UserComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
