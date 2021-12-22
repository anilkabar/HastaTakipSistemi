import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LeftbarComponent } from './components/layout/leftbar/leftbar.component';
import { PatientdetailComponent } from './components/patients/patientdetail/patientdetail.component';
import { PatientsComponent } from './components/patients/patients.component';

@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent,
      LeftbarComponent,
      HeaderComponent,
      FooterComponent,
      PatientdetailComponent,
      PatientsComponent

      

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
