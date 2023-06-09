import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:'', redirectTo: '/project/0', pathMatch: 'full'},
  {path:'project/0', component: ProjectDashboardComponent},
  {path:'user/register', component: UserRegistrationComponent},
  {path:'user/login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
