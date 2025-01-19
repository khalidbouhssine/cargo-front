import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MenunormalComponent } from './components/menunormal/menunormal.component';
import { LoginComponent } from './pages/login/login.component';
import { MenubottomComponent } from './components/menubottom/menubottom.component';
import { LoginLComponent } from './pages/login-l/login-l.component';

import { AuthLGuard } from './guards/authL.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginGComponent } from './pages/login-g/login-g.component';
import { DashboardGComponent } from './pages/dashboard-g/dashboard-g.component';
import { MenuleftdashComponent } from './components/menuleftdash/menuleftdash.component';
import { MenutopdashComponent } from './components/menutopdash/menutopdash.component';
import { TablecarComponent } from './components/tablecar/tablecar.component';
import { TableclientComponent } from './components/tableclient/tableclient.component';
import { TableadminComponent } from './components/tableadmin/tableadmin.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { HistoclientComponent } from './components/histoclient/histoclient.component';
import { HistocarComponent } from './components/histocar/histocar.component';
import { MenuhomeComponent } from './components/menuhome/menuhome.component';
import { MenumobilehomeComponent } from './components/menumobilehome/menumobilehome.component';
import { SeereservationComponent } from './pages/seereservation/seereservation.component';
import { ModifyreservationComponent } from './pages/modifyreservation/modifyreservation.component';
import { ResultreservationComponent } from './pages/resultreservation/resultreservation.component';
import { RespayComponent } from './pages/respay/respay.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { TablecityComponent } from './components/tablecity/tablecity.component';
import { AddcityComponent } from './components/addcity/addcity.component';
import { TablereservationComponent } from './components/tablereservation/tablereservation.component';
import { TableclaimComponent } from './components/tableclaim/tableclaim.component';
import { InforeservationComponent } from './components/inforeservation/inforeservation.component';
import { InfoclaimComponent } from './components/infoclaim/infoclaim.component';
import { DispprofileComponent } from './components/dispprofile/dispprofile.component';
import { StaticComponent } from './components/static/static.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    MenunormalComponent,
    LoginComponent,
    MenubottomComponent,
    LoginLComponent,
    DashboardComponent,
    LoginGComponent,
    DashboardGComponent,
    MenuleftdashComponent,
    MenutopdashComponent,
    TablecarComponent,
    TableclientComponent,
    TableadminComponent,
    AddcarComponent,
    AddclientComponent,
    HistoclientComponent,
    HistocarComponent,
    MenuhomeComponent,
    MenumobilehomeComponent,
    SeereservationComponent,
    ModifyreservationComponent,
    ResultreservationComponent,
    RespayComponent,
    AddadminComponent,
    TablecityComponent,
    AddcityComponent,
    TablereservationComponent,
    TableclaimComponent,
    InforeservationComponent,
    InfoclaimComponent,
    DispprofileComponent,
    StaticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthLGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
