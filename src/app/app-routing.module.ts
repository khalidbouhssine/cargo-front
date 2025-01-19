import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginLComponent } from './pages/login-l/login-l.component';
import { LoginGComponent } from './pages/login-g/login-g.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardGComponent } from './pages/dashboard-g/dashboard-g.component';
import { SeereservationComponent } from './pages/seereservation/seereservation.component';
import { ModifyreservationComponent } from './pages/modifyreservation/modifyreservation.component';
import { ResultreservationComponent } from './pages/resultreservation/resultreservation.component';
import { RespayComponent } from './pages/respay/respay.component';
import { TablecityComponent } from './components/tablecity/tablecity.component';
import { TablecarComponent } from './components/tablecar/tablecar.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { HistocarComponent } from './components/histocar/histocar.component';
import { TableclientComponent } from './components/tableclient/tableclient.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { HistoclientComponent } from './components/histoclient/histoclient.component';
import { TableadminComponent } from './components/tableadmin/tableadmin.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { AddcityComponent } from './components/addcity/addcity.component';
import { TablereservationComponent } from './components/tablereservation/tablereservation.component';
import { TableclaimComponent } from './components/tableclaim/tableclaim.component';
import { InforeservationComponent } from './components/inforeservation/inforeservation.component';
import { InfoclaimComponent } from './components/infoclaim/infoclaim.component';
import { DispprofileComponent } from './components/dispprofile/dispprofile.component';
import { StaticComponent } from './components/static/static.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthLGuard } from './guards/authL.guard';
import { AuthGGuard } from './guards/authG.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loginl', component: LoginLComponent },
  { path: 'loging', component: LoginGComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'seereservation', component: SeereservationComponent },
  { path: 'modifyreservation', component: ModifyreservationComponent },
  { path: 'result', component: ResultreservationComponent },
  { path: 'payment', component: RespayComponent },
  { path: 'dispprofile', component: DispprofileComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthLGuard] },
  {
    path: 'dashboardg',
    component: DashboardGComponent,
    canActivate: [AuthGGuard],
    children: [
      { path: 'car', component: TablecarComponent },
      { path: 'addcar', component: AddcarComponent },
      { path: 'histocar/:id', component: HistocarComponent },
      { path: 'client', component: TableclientComponent },
      { path: 'addclient', component: AddclientComponent },
      { path: 'histoclient/:id', component: HistoclientComponent },
      { path: 'admin', component: TableadminComponent },
      { path: 'addadmin', component: AddadminComponent },
      { path: 'book', component: TableadminComponent },
      { path: 'city', component: TablecityComponent },
      { path: 'addcity', component: AddcityComponent },
      { path: 'reservation', component: TablereservationComponent },
      { path: 'claim', component: TableclaimComponent },
      { path: 'inforeservation', component: InforeservationComponent },
      { path: 'infoclaim', component: InfoclaimComponent },
      { path: 'static', component: StaticComponent },
      { path: '', redirectTo: 'car', pathMatch: 'full' }, // Default route for dashboardg
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
