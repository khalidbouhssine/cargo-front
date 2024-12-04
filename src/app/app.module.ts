import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { MenunormalComponent } from './components/menunormal/menunormal.component';
import { TitlenormalComponent } from './components/titlenormal/titlenormal.component';
import { InputpasswordComponent } from './components/inputpassword/inputpassword.component';
import { BtnnormalComponent } from './components/btnnormal/btnnormal.component';  // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    InputComponent,
    MenunormalComponent,
    TitlenormalComponent,
    InputpasswordComponent,
    BtnnormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
