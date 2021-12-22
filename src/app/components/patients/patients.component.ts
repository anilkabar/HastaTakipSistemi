import { Component, OnInit } from '@angular/core';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers:[PatientdetailComponent]
})
export class PatientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  patientDetail(event:any){
    console.log(event.target);
    console.log("çağrıldı");
    
  }

}
