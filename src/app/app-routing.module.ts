import { FruitDetailsComponent } from './fruit-details/fruit-details.component';
import { FruitComponent } from './fruits/fruit.component';
import {LoginComponent} from './core/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { GituserComponent } from './gituser/gituser.component';

const routes: Routes = [
  {path:'', redirectTo:'fruit', pathMatch: 'full'},
  {path:'fruit', component: FruitComponent},
  {path:'fruit-detail', component: FruitDetailsComponent},
  {path:'login', component: LoginComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'git', component: GituserComponent},  
  {path:'**', component: FruitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
