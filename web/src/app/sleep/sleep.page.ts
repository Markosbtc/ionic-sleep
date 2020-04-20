import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ObservationConstants } from '@inclouded/fhir-observation';
import { SleepObservationService } from './../shared/services/sleep-observation.service';
import { IObservation } from '@ahryman40k/ts-fhir-types/lib/R4';
import { LoadingController, ToastController } from '@ionic/angular';


export const SLEEP_INPUTS = [
  {
    text: 'Könnyű Alvás',
    formControlName: 'lightSleep',
    type: 'number'
  },
  {
    text: 'Mély alvás',
    formControlName: 'deepSleep',
    type: 'number'
  },
  {
    text: 'Ébrenlét',
    formControlName: 'wakeSleep',
    type: 'number'
  },
];


@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})

export class SleepPage implements OnInit {
  title = 'SLEEP';
  date = new Date();

  // manual adding declarations
  sleepForm: FormGroup;
  sleepInputs;

  constructor(
    private sleepObservationService: SleepObservationService,
    private loadingController: LoadingController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.sleepInputs = SLEEP_INPUTS;
    this.resetSleepForm();
  }

  resetSleepForm(): void {
    this.sleepForm = new FormGroup({
      lightSleep: new FormControl('', Validators.required),
      deepSleep: new FormControl('', Validators.required),
      wakeSleep: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
  }

  async synchronization() {
    const light = this.sleepForm.value.lightSleep;
    const deep = this.sleepForm.value.deepSleep;
    const wake = this.sleepForm.value.wakeSleep;
    const date = new Date(this.sleepForm.value.date);
    const patientid = '123-123-123';

    const loading = await this.loadingController.create({
      message: 'Feltöltés...',
      duration: 10000
    });
    loading.present().then(async () => {
      if (!(await this.upload(this.createSleepingObservation(patientid, date, light, deep, wake)))) {
        loading.dismiss(false);
      }
      loading.dismiss(true);
    });
    loading.onDidDismiss().then((data: any) => {
      if (data.data) {
        this.presentToast('Sikeres feltöltés az adatbázisba');
      } else {
        this.presentToast('Sikertelen feltöltés az adatbázisba');
      }
      this.resetSleepForm();
    });
  }

  async upload(measurement: IObservation): Promise<boolean> {
    let returnValue = true;
    await this.sleepObservationService.add(measurement).then((res: IObservation) => {
      console.log('sikeres feltöltés: ', res);
    }).catch((error: any) => {
      console.error('add sleep error: ', error);
      this.presentToast('HIBA feltöltésnél');
      returnValue = false;
    });
    return returnValue;
  }

  createSleepingObservation(patientId: string, date: Date, light, deep, wake?, rem?): IObservation {
    return {
      basedOn: [{ reference: null }],
      subject: { reference: patientId },
      resourceType: 'Observation',
      status: 'final',
      performer: [{ reference: 'docId' }],
      effectiveDateTime: date.toISOString(),
      code: {
        coding: [{
          system: ObservationConstants.SleepDurationCodeModel.system,
          code: ObservationConstants.SleepDurationCodeModel.code,
          display: ObservationConstants.SleepDurationCodeModel.display
        }],
        text: ObservationConstants.SleepDurationCodeModel.text
      },
      component: [{
        code: {
          coding: [{
            system: ObservationConstants.LightSleepDurationCodeModel.system,
            code: ObservationConstants.LightSleepDurationCodeModel.code,
            display: ObservationConstants.LightSleepDurationCodeModel.display
          }],
          text: ObservationConstants.LightSleepDurationCodeModel.text
        },
        valueQuantity: {
          value: light,
          unit: 'min'
        }
      }, {
        code: {
          coding: [{
            system: ObservationConstants.DeepSleepDurationCodeModel.system,
            code: ObservationConstants.DeepSleepDurationCodeModel.code,
            display: ObservationConstants.DeepSleepDurationCodeModel.display
          }],
          text: ObservationConstants.DeepSleepDurationCodeModel.text
        },
        valueQuantity: {
          value: deep,
          unit: 'min'
        },
      }, {
        code: {
          coding: [{
            system: ObservationConstants.WakeSleepDurationCodeModel.system,
            code: ObservationConstants.WakeSleepDurationCodeModel.code,
            display: ObservationConstants.WakeSleepDurationCodeModel.display
          }],
          text: ObservationConstants.WakeSleepDurationCodeModel.text
        },
        valueQuantity: {
          value: wake || 0,
          unit: 'min'
        }
      }, {
        code: {
          coding: [{
            system: ObservationConstants.RemSleepDurationCodeModel.system,
            code: ObservationConstants.RemSleepDurationCodeModel.code,
            display: ObservationConstants.RemSleepDurationCodeModel.display
          }],
          text: ObservationConstants.RemSleepDurationCodeModel.text
        },
        valueQuantity: {
          value: rem || 0,
          unit: 'min'
        }
      }]
    } as IObservation;
  }

  async presentToast(message) {
    const toast = this.toastCtrl.create({
      message,
      duration: 3000
    });
    (await toast).present();
  }

}
