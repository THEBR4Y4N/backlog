import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { Page404Component } from './components/page404/page404.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tareas',component:TareasComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginPageComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
