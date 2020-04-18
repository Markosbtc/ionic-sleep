import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observation-list',
  templateUrl: './observation-list.page.html',
  styleUrls: ['./observation-list.page.scss'],
})
export class ObservationListPage implements OnInit {
  title = 'DASHBOARD';
  loading = true;
  sleepData;


  constructor() { }

  ngOnInit() {
    this.loading = false;
    this.sleepData = 1;
  }

// -----------------------------------------------------------------
  createNewTypeBloodPressureObservation(patientId: string) {
    return {
      code: {
        coding: [{
          code: '55284-4', display:
            'Blood pressure systolic & diastolic',
          system: 'http://loinc.org'
        }]
      },
      component: [{
        code: {
          coding: [{
            code: '8480-6',
            display: 'Intravascular systolic',
            system: 'http://loinc.org'
          }]
        },
        referenceRange: [{
          high: { value: 169.58359734249157 },
          low: { value: 99.46321957968875 }
        }],
        valueQuantity: { unit: 'Hgmm', value: 174.12896493983556 }
      },
      {
        code: {
          coding: [{
            code: '8462-4',
            display: 'Intravascular diastolic',
            system: 'http://loinc.org'
          }]
        },
        referenceRange: [{
          high: { value: 104.00292431609599 },
          low: { value: 57.634236322073505 }
        }],
        valueQuantity: { unit: 'Hgmm', value: 90.9834217665475 }
      },
      {
        code: {
          coding: [{
            code: '8867-4', display: 'Heart rate',
            system: 'http://loinc.org'
          }]
        },
        referenceRange: [{
          high: { value: 113.61567044408287 },
          low: { value: 49.97044751353194 }
        }],
        valueQuantity: { unit: 'bpm', value: 95.49941392361909 }
      }],
      effectiveDateTime: '2019-11-10T13:00:00',
      meta: {
        lastUpdated: '2019-12-06T15:10:04.152738'
      },
      performer: [{
        reference: patientId
      }],
      resourceType: 'Observation',
      status: 'final',
      subject:
        { reference: patientId }
    };
  }


}

