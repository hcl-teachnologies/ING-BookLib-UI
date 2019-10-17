import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';


const routes: Routes = [{
  path: '',
  redirectTo:'login', pathMatch:'full'
 },{
  path:'login', component:LoginComponent
},
{
  path:'register', component:RegisterComponent
},
{
  path:'home', component:HomeComponent
},
{
  path:'donate', component:DonateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
