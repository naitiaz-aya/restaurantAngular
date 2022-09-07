import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { SaladeComponent } from './components/salade/salade.component';
import { ShowallComponent } from './components/showall/showall.component';
import { LoginComponent } from './contact/login/login.component';
import { RegisterComponent } from './contact/register/register.component';

const routes: Routes = [
	{path:"", component:ShowallComponent},
	{path:"patisserie", component:PatisserieComponent},
	{path:"salade", component:SaladeComponent},
	{path:"cuisine", component:CuisineComponent},
	{path:"register", component:RegisterComponent},
	{path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
