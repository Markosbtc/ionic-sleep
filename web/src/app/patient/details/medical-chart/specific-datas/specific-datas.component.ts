import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { IObservation, IObservation_Component, IPatient } from '@ahryman40k/ts-fhir-types/lib/R4';
import { ObservationConstants } from '@inclouded/fhir-observation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GinaService } from '../../services/gina.service';
import { Subscription } from 'rxjs';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-specific-datas',
  templateUrl: './specific-datas.component.html',
  styleUrls: ['./specific-datas.component.scss'],
})
export class SpecificDatasComponent implements OnInit, OnDestroy {
  @ViewChild('ginaInput') ginaInput: IonInput;
  @Input() patient: IPatient;
  @Input() user: any;
  @Input() inData: IObservation;

  form: FormGroup;
  otherDatas: any;

  oldGina: IObservation;
  ginaLoading = true;
  showAfterStatus = false;

  getGinaSub: Subscription;

  constructor(private ginaService: GinaService) {
    this.reset();
    this.otherDatas = this.prepareOtherDatas();
  }

  ngOnInit() {
    this.getGinaSub = this.ginaService.getGINAObservationByPatient(this.patient.id).subscribe((getGinaRes: IObservation[]) => {
      // console.log('getGinaRes: ', getGinaRes);
      if (getGinaRes.length > 0) {
        this.oldGina = getGinaRes[0];
        this.form.controls.ginaScore.setValue(getGinaRes[0].valueString);
      }
      this.ginaLoading = false;
    }, error => {
      console.error('error at getGinaByPatient: ', error);
      this.ginaLoading = false;
    });

    if (this.inData) {
      this.fill(this.inData);
    }
  }

  ngOnDestroy() {
    if (this.getGinaSub) {
      this.getGinaSub.unsubscribe();
    }
  }

  reset() {
    this.form = this.resetForm();
  }

  resetForm(): FormGroup {
    return new FormGroup({
      ginaScore: new FormControl('', Validators.compose([Validators.required, Validators.min(2), Validators.max(5)]))
    });
  }

  prepareOtherDatas(): any {
    return {
      body: {
        height: '',
        weight: ''
      },
      PredictionAlgorythm: '',
      ethnicity: ''
    };
  }

  fill(observation: IObservation) {
    observation.component.forEach((component: IObservation_Component) => {
      switch (component.code.coding[0].code) {
        case ObservationConstants.BodyHeightCode:
          this.otherDatas.body.height = component.valueQuantity.value + ' ' + component.valueQuantity.unit;
          break;
        case ObservationConstants.BodyWeightCode:
          this.otherDatas.body.weight = component.valueQuantity.value + ' ' + component.valueQuantity.unit;
          break;
        case 'prediction':
          this.otherDatas.PredictionAlgorythm = component.valueString;
          break;
        case ObservationConstants.EthnicityCode:
          this.otherDatas.ethnicity = component.valueString;
          break;
        default:
          break;
      }
    });
  }

  add(value) {
    if (value) {
      console.log('add');
      this.ginaLoading = true;
      this.ginaService.add(this.createObservation(value)).then((res: IObservation) => {
        console.log('res: ', res);
        this.oldGina = res;
        this.ginaLoading = false;
        this.showAfterStatus = true;
        setTimeout(() => {
          this.showAfterStatus = false;
        }, 1000);
      }).catch(error => {
        this.ginaLoading = false;
        console.error('error at addGina: ', error);
      });
    }
  }

  update(value) {
    if (value && value !== this.oldGina.valueString) {
      console.log('update');
      this.ginaLoading = true;
      this.oldGina.valueString = value;
      this.ginaService.update(this.oldGina).then((res: IObservation) => {
        console.log('res: ', res);
        this.oldGina = res;
        this.ginaLoading = false;
        this.showAfterStatus = true;
        setTimeout(() => {
          this.showAfterStatus = false;
        }, 1000);
      }).catch(error => {
        this.ginaLoading = false;
        console.error('error at updateGina: ', error);
      });
    }
  }

  createObservation(value): IObservation {
    return {
      code: {
        coding: [{
          system: ObservationConstants.ObservationSystem,
          code: ObservationConstants.AsthmaCode,
          display: ObservationConstants.AsthmaDisplay
        }],
        text: ObservationConstants.AsthmaText
      },
      subject: {
        reference: this.patient.id
      },
      performer: [{
        reference: this.user.uid
      }],
      valueString: value,
      category: [{
        text: 'gina'
      }]
    } as IObservation;
  }
}
