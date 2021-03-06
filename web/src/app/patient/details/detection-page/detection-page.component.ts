import { IPatient, IObservation } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslatePipe } from '@inclouded/ionic4-inclouded-lib';
import { SleepObservationService } from './../../../shared/services/sleep-observation.service';

@Component({
  selector: 'app-detection-page',
  templateUrl: './detection-page.component.html',
  styleUrls: ['./detection-page.component.scss']
})
export class DetectionPageComponent implements OnInit, OnDestroy {
  @Input() patient: IPatient;
  @Input() user: any;

  sleepData: IObservation[];
  getSleepSub: Subscription;
  sleepTableDetails = [];

  // Other
  errNoDataMsg = 'OBSERVATION';
  loading = true;

  constructor(private sleepObservationService: SleepObservationService, private translatePipe: TranslatePipe) { }

  ngOnDestroy() {
    if (this.getSleepSub) {
      this.getSleepSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.errNoDataMsg = this.translatePipe.transform(this.errNoDataMsg);
    this.getSleepingData();
  }

  getSleepingData() {
    // for the past 7 days
    this.loading = true;
    const to = new Date();
    const from = new Date(new Date(new Date().setDate(new Date().getDate() - 6)).setHours(0, 0, 0, 0));
    this.getSleepSub = this.sleepObservationService.getAllBySubjectAndDateInterval(this.patient.identifier[0].value, from, to)
      .subscribe((getSleepingRes: IObservation[]) => {
        if (getSleepingRes.length > 0) {
          this.sleepData = getSleepingRes;
          this.loading = false;
          this.calculateAvgs();
        } else {
          console.error('no sleeping observation');
          this.loading = false;
        }
      }, error => {
        console.error('error at getObservation: ', error);
        this.loading = false;
      });
  }

  calculateAvgs() {
    const lightSleeps = [];
    const deepSleeps = [];
    const awakes = [];
    const sleepStarts = [];
    const sleepEnds = [];

    this.sleepData.forEach(e => {
      lightSleeps.push(e.component[0].valueQuantity.value);
      deepSleeps.push(e.component[1].valueQuantity.value);
      awakes.push(e.component[2].valueQuantity.value);
    });

    const avgLightSleep = this.avg(lightSleeps);
    const avgDeepSleep = this.avg(deepSleeps);
    const avgAwake = this.avg(awakes);
    const avgSleep = avgLightSleep + avgDeepSleep;
    const avgSleepStart = 0;
    const avgSleepEnd = 0;

    this.sleepTableDetails = [[
      {
        label: 'AVG_SLEEP',
        data: avgSleep
      },
      {
        label: 'AVG_DEEP_SLEEP',
        data: avgDeepSleep
      },
      {
        label: 'AVG_LIGHT_SLEEP',
        data: avgLightSleep
      }
    ], [
      {
        label: 'AVG_SLEEP_START',
        data: avgSleepStart
      },
      {
        label: 'AVG_SLEEP_END',
        data: avgSleepEnd
      },
      {
        label: 'AVG_AWAKE_SLEEP',
        data: avgAwake
      }
    ]];
  }

  avg(arr) {
    return Math.floor(arr.reduce((a, b) => a + parseInt(b, 10), 0) / arr.length) || 0;
  }
}
