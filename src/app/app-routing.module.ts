import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientaddComponent } from './components/patients/patientadd/patientadd.component';
import { PatientdetailComponent } from './components/patients/patientdetail/patientdetail.component';
import { PatientsComponent } from './components/patients/patients.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Patients',component:PatientsComponent},
  {path:'PatientDetail',component:PatientdetailComponent},
  {path:'Patients/PatientAdd',component:PatientaddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
