import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ObservationConstants } from '@inclouded/fhir-observation';
import { SleepObservationService } from './../shared/services/sleep-observation.service';
import { IObservation } from '@ahryman40k/ts-fhir-types/lib/R4';
import { LoadingController } from '@ionic/angular';
import { ToastService } from '@inclouded/ionic4-inclouded-lib';


export const SLEEP_INPUTS = [
  {
    text: 'LIGHT_SLEEP',
    formControlName: 'lightSleep',
    type: 'number'
  },
  {
    text: 'DEEP_SLEEP',
    formControlName: 'deepSleep',
    type: 'number'
  },
  {
    text: 'AWAKE_SLEEP',
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
  title = 'ADD_SLEEP';
  date = new Date();

  // manual adding declarations
  sleepForm: FormGroup;
  sleepInputs;

  constructor(
    private sleepObservationService: SleepObservationService,
    private loadingController: LoadingController,
    private toastService: ToastService
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
        this.toastService.presentToast('Sikeres feltöltés az adatbázisba');
      } else {
        this.toastService.presentToast('Sikertelen feltöltés az adatbázisba');
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
      this.toastService.presentToast('HIBA feltöltésnél');
      returnValue = false;
    });
    return returnValue;
  }

  createSleepingObservation(patientId: string, date: Date, light: number, deep: number, wake?: number, rem?: number): IObservation {
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


  /* fillDBwithRandomObservations() {
    for (let i = 1; i < 60; i++) {
      const date = new Date(new Date().setDate(new Date().getDate() + i));
      const light = this.getRandomInt(240, 540);
      const deep = this.getRandomInt(30, 240);
      let wake = 0;
      if (i % 5 !== 0) {
        wake = this.getRandomInt(0, 60);
      }

      this.upload(this.createSleepingObservation('123-123-123', date, light, deep, wake));
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } */
}
