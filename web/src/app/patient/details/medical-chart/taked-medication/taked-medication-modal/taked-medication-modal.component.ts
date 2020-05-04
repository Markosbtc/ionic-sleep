import { Component, OnInit, Input } from '@angular/core';
import { IPatient, IMedication, IMedicationRequest } from '@ahryman40k/ts-fhir-types/lib/R4';
import { MedicationService } from '../../../services/medication.service';
// import { DOSAGE_PERIODS, DAYS, DOSE_UNIT } from '@inclouded/ionic4-inclouded-lib/public-api';
import { DOSAGE_PERIODS, DAYS, DOSE_UNIT } from '../medication-constants';

@Component({
  selector: 'app-taked-medication-modal',
  templateUrl: './taked-medication-modal.component.html',
  styleUrls: ['./taked-medication-modal.component.scss'],
})
export class TakedMedicationModalComponent implements OnInit {
  title = 'ADD_TAKED_MEDICATION';

  @Input() patient: IPatient;
  @Input() user: any;
  @Input() inData: IMedicationRequest; // medication request for edit
  @Input() extraData: IMedication[]; // medications list

  dosagePeriods = DOSAGE_PERIODS;
  days = DAYS;
  doseUnit = DOSE_UNIT;

  constructor(private medicationService: MedicationService) { }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_TAKED_MEDICATION' : 'ADD_TAKED_MEDICATION';
  }

  onCallMedicationSave(inData: IMedication) {
    this.medicationService.add(inData).then((medRes: IMedication) => {
      console.log('medAdd.res: ', medRes);
      this.extraData.push(medRes);
    }).catch(error => {
      console.error('error at saving medication: ', error);
    });
  }

  onCallDelete(inDataId: string) {
    console.log('onCallDelete: ', inDataId);
    this.medicationService.delete(inDataId).then(() => {
      console.log('medDelete.res: ', true);
      this.extraData.splice(this.extraData.indexOf(this.extraData.find((med: IMedication) => med.id === inDataId)), 1);
    }).catch(error => {
      console.error('error at deleting medication: ', error);
    });
  }
}
