import { AssociativeArray, ModalService, TranslatePipe, AlertService } from '@inclouded/ionic4-inclouded-lib';
import { CarePlanAddModalComponent } from './care-plan/care-plan-add-modal/care-plan-add-modal.component';
import { IPatient, IMedicationRequest, ICarePlan, IDosage } from '@ahryman40k/ts-fhir-types/lib/R4';
import { OdAddModalComponent } from './observation-definition/od-add-modal/od-add-modal.component';
import { RequestModalComponent } from './medication/request-modal/request-modal.component';
import { ObservationDefinitionService } from './services/observation-definition.service';
import { GoalAddModalComponent } from './goal/goal-add-modal/goal-add-modal.component';
import { MedicationRequestService } from './services/medication-request.service';
import { GeneralCarePlanService } from './services/general-care-plan.service';
import { CarePlanService } from './services/care-plan.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { GoalService } from './services/goal.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.scss'],
})
export class CareComponent implements OnInit {
  medreqs: IMedicationRequest[] = [];
  careplans: ICarePlan[] = [];
  generalCarePlan: ICarePlan;
  generalCarePlanLoaded: boolean;
  units = ['pill', 'sup', 'suppository', 'ampoula', 'ek', 'kk', 'tk'];
  periods = ['monthly', 'weekly', 'daily', 'hourly', 'at_mealtimes', 'occasional'];
  days = [
    { text: 'MONDAY', value: 'H' },
    { text: 'TUESDAY', value: 'K' },
    { text: 'WEDNESDAY', value: 'Sze' },
    { text: 'THURSDAY', value: 'Cs' },
    { text: 'FRIDAY', value: 'P' },
    { text: 'SATURDAY', value: 'Szo' },
    { text: 'SUNDAY', value: 'V' },
  ];

  @Input() patient: IPatient;
  @Input() user: any;

  modalComponents: AssociativeArray = {
    medreq: () => RequestModalComponent,
    careplan: () => CarePlanAddModalComponent,
    goal: () => GoalAddModalComponent,
    supportingInfo: () => OdAddModalComponent,
  };

  constructor(
    private modalService: ModalService,
    private actionSheetController: ActionSheetController, private translatePipe: TranslatePipe,
    private alertService: AlertService, private medreqService: MedicationRequestService,
    private careplanService: CarePlanService, private generalCarePlanService: GeneralCarePlanService,
    private goalService: GoalService, private supportingInfoService: ObservationDefinitionService
  ) { }

  ngOnInit() {
    this.get('medreq');
    this.get('careplan', 'draft');
    this.get2('generalCarePlan');
  }

  onDoseSave(event, med) {
    if (event) {
      this.medreqService.update(this.modyDose(event, med));
    }

  }

  onDoseUpdate(event, med) {
    if (event) {
      this.medreqService.update(this.modyDose(event, med));
    }
  }

  modyDose(dose: IDosage, medreq: IMedicationRequest, ) {
    dose.text = medreq.dosageInstruction[0].text;
    medreq.dosageInstruction = [dose];
    return medreq;
  }

  openModal(componentName: string, editableData?, careplan?: ICarePlan) {
    let params: any = { patient: this.patient, user: this.user };
    if (editableData) {
      params = { patient: this.patient, user: this.user, inData: editableData };
    }
    this.modalService.presentModal(this.modalComponents[componentName](), params).then(modal => {
      modal.onDidDismiss().then(detail => {
        if (detail && detail.data) {
          if (editableData) {
            this[componentName + 'Service'].update(detail.data).then(result => {
              this.updateGoalAlert(careplan, componentName, result);
            });
          } else {
            this[componentName + 'Service'].add(detail.data).then(result => {
              this.addGoalAlert(careplan, componentName, result);
            });
          }
        }
      });
    });
  }

  addGoalAlert(careplan: ICarePlan, target: string, result: any) {
    if (careplan) {
      if (!careplan[target]) {
        careplan[target] = [];
      }
      if (target === 'goal') {
        careplan[target].push({
          reference: result.id, display: result.description.coding[0].display + ' ' +
            result.target[0].detailQuantity.value + ' ' + result.target[0].detailQuantity.unit
        });
      }
      if (target === 'supportingInfo') {
        careplan[target].push({
          reference: result.id, display: result.code.coding[0].display + ' ' +
            result.qualifiedInterval[0].range.low.value + ' - ' + result.qualifiedInterval[0].range.high.value
        });
      }
      this.careplanService.update(careplan);
    }
  }

  updateGoalAlert(careplan: ICarePlan, target: string, result) {
    if (careplan) {
      careplan[target] = careplan[target].map((data) => {
        if (data.reference === result.id) {
          if (target === 'goal') {
            data = {
              reference: result.id, display: result.description.coding[0].display + ' ' +
                result.target[0].detailQuantity.value + ' ' + result.target[0].detailQuantity.unit
            };
          }
          if (target === 'supportingInfo') {
            data = {
              reference: result.id, display: result.code.coding[0].display + ' ' +
                result.qualifiedInterval[0].range.low.value + ' - ' + result.qualifiedInterval[0].range.high.value
            };
          }
        }
        return data;
      });
      this.careplanService.update(careplan);
    }
  }

  get(componentName: string, status?: string) {
    this[componentName + 'Service'].getByPatient(this.patient.id, status).subscribe((data) => {
      this[componentName + 's'] = data;
    });
  }

  get2(componentName: string) {
    this[componentName + 'Service'].getByPatient(this.patient.id).subscribe((data) => {
      if (data && data[0]) {
        this[componentName] = data[0];
      }
      this[componentName + 'Loaded'] = true;
    }, () => {
      this[componentName + 'Loaded'] = true;
    });
  }

  openDeleteAlert(componentName: string, id: string) {
    this.alertService.presentDelete(id, componentName.toUpperCase(), () => {
      this[componentName + 'Service'].delete(id);
    });
  }

  openDeleteAlert2(componentName: string, id: string, careplan) {
    this.alertService.presentDelete(id, componentName.toUpperCase(), () => {
      this[componentName + 'Service'].delete(id).then(() => {
        careplan[componentName] = careplan[componentName].filter((data) => data.reference !== id);
        this.careplanService.update(careplan);
      });
    });
  }

  onCallMore(componentName: string, data) {
    if (data) {
      this.openActionSheet(componentName, data);
    }
  }

  onCallAdd(data, careplan: ICarePlan) {
    this.openModal(data, null, careplan);
  }

  onCallModalDelete(event, careplan) {
    this.openDeleteAlert2(event.name, event.data.reference, careplan);
  }

  onCallUpdate(componentName: string, event) {
    if (event) {
      this[componentName + 'Service'].update(event);
    }
  }

  async onCallUpdate2(event, careplan: ICarePlan) {
    if (event) {
      const elem = await this[event.name + 'Service'].getById(event.data.reference).pipe(take(1))
        .toPromise();
      this.openModal(event.name, elem, careplan);
    }
  }

  onCallSave(componentName: string, event) {
    if (event) {
      this[componentName + 'Service'].add(event);
    }
  }

  async openActionSheet(componentName: string, inData) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: this.translatePipe.transform('EDIT_L'),
        icon: 'create',
        handler: () => { this.openModal(componentName, inData); }
      },
      {
        text: this.translatePipe.transform('DELETE_L'),
        icon: 'trash',
        handler: () => { this.openDeleteAlert(componentName, inData.id); }
      }]
    });
    await actionSheet.present();
  }

}
