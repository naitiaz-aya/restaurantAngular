import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TitreComponent } from './copmonents/titre/titre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { SaladeComponent } from './components/salade/salade.component';
import { ShowallComponent } from './components/showall/showall.component';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    // TitreComponent,
    NavbarComponent,
    CuisineComponent,
    PatisserieComponent,
    SaladeComponent,
    ShowallComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
