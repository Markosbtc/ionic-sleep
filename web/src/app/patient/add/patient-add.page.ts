import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPatient } from '@ahryman40k/ts-fhir-types/lib/R4';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ToastService, LoadingService, AlertService,
  EMAIL_REGEX, PHONE_REGEX, PrevRouteService
} from '@inclouded/ionic4-inclouded-lib';
import { PatientService } from 'src/app/shared/services/patient.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.page.html',
  styleUrls: ['./patient-add.page.scss'],
})
export class PatientAddPage implements OnInit, OnDestroy {
  title = 'ADD_PATIENT';
  patientAddSub: Subscription;
  getPatientRoute: Subscription;
  patientForUpdate: IPatient;

  extraValidators = {
    contact: [Validators.required]
  };

  modalParameters = {
    contact: {
      name: [Validators.required],
      email: [Validators.required, Validators.pattern(EMAIL_REGEX)],
      phone: [Validators.required, Validators.pattern(PHONE_REGEX)]
    }
  };

  constructor(
    private patientService: PatientService, private loadingService: LoadingService,
    private alertService: AlertService, private toastService: ToastService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private prevRouteService: PrevRouteService
  ) { }

  ngOnInit() {
    this.getPatientFromRoute();
  }

  ngOnDestroy(): void {
    if (this.patientAddSub) {
      this.patientAddSub.unsubscribe();
    }
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
      this.patientForUpdate = JSON.parse(localStorage.getItem('patient'));
      if (this.patientForUpdate) {
        this.title = 'MODIFICATION_PATIENT';
      }
    });
  }

  save(patient: IPatient) {
    this.loadingService.presentLoading('ADD_PATIENT');
    this.patientService.add(patient).then(
      () => {
        this.toastService.presentToast('ADD_PATIENT_SUCCESS');
      }, () => {
        this.alertService.presentError('ADD_PATIENT_UNSUCCESSFULL');
      }).finally(() => {
        this.loadingService.dismissLoading();
      });
  }

  update(patient: IPatient) {
    this.loadingService.presentLoading('MODIFICATION_PATIENT');
    this.patientService.update(patient).then(
      () => {
        localStorage.setItem('patient', JSON.stringify(patient));
        this.toastService.presentToast('UPDATE_PATIENT_SUCCESS');
        console.log('this.prevRouteService.getPreviousUrl(): ', this.prevRouteService.getPreviousUrl());
        this.router.navigateByUrl(this.prevRouteService.getPreviousUrl());
      }, () => {
        this.alertService.presentError('UPDATE_PATIENT_UNSUCCESSFULL');
      }).finally(() => {
        this.loadingService.dismissLoading();
      });
  }
}
