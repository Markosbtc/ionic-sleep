import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPatient } from '@ahryman40k/ts-fhir-types/lib/R4';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.page.html',
  styleUrls: ['./patient-details.page.scss'],
})
export class PatientDetailsPage implements OnInit, OnDestroy {

  title = 'PATIENT';
  getPatientRoute: Subscription;
  patient: IPatient;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private storage: Storage) { }

  ngOnInit() {
    this.getPatientFromRoute();
    this.getUser();
  }

  ngOnDestroy() {
    if (this.getPatientRoute) {
      this.getPatientRoute.unsubscribe();
    }
    localStorage.removeItem('patient');
  }

  getPatientFromRoute() {
    this.getPatientRoute = this.activatedRoute.paramMap.subscribe(() => {
      const patient: IPatient = window.history.state.parameter;
      if (patient) {
        localStorage.setItem('patient', JSON.stringify(patient));
      }
      this.patient = JSON.parse(localStorage.getItem('patient'));
      // console.log(this.patient);
    });
  }

  getUser() {
    this.storage.get('user').then(user => { this.user = user; });
  }
}
