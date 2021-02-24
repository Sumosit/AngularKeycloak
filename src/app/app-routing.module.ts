import { SignupGuard } from './guards/signup.guard';
import { FooGuard } from './guards/foo.guard';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RatesComponent} from "./rates/rates.component";


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'rates-list', component: RatesComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin', 'user']}},
  {path: 'signup', component: SignupComponent, canActivate: [SignupGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
