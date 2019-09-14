import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitComponent } from './fruits/fruit.component';
import { FruitService } from './fruits/fruit.service';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GituserComponent } from './gituser/gituser.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    FruitDetailsComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    GituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
