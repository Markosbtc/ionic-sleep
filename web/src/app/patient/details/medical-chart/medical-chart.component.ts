import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BloodTypeService } from '../services/blood-type.service';
import { ConditionService } from '../services/condition.service';
import { AppointmentService } from '../services/appointment.service';
import { ActionSheetController } from '@ionic/angular';
import { ConditionModalComponent } from './condition-modal/condition-modal.component';
import { MedicationModalComponent } from './medication-modal/medication-modal.component';
import { AllergyIntoleranceService } from '../services/allergy-intolerance.service';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { MedicationStatementService } from '../services/medication-statement.service';
import { AssociativeArray, ModalService, TranslatePipe, AlertService } from '@inclouded/ionic4-inclouded-lib';
import {
  IObservation, IPatient, IMedicationStatement,
  IAppointment, ICondition, IAllergyIntolerance, IMedication, IMedicationRequest
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { TakedMedicationModalComponent } from './taked-medication/taked-medication-modal/taked-medication-modal.component';
import { MedicationService } from '../services/medication.service';
import { MedicationRequestService } from '../services/medication-request.service';
import { SleepObservationService } from './../../../shared/services/sleep-observation.service';

@Component({
  selector: 'app-medical-chart',
  templateUrl: './medical-chart.component.html',
  styleUrls: ['./medical-chart.component.scss'],
})
export class MedicalChartComponent implements OnInit {
  @Input() patient: IPatient;
  @Input() user: any;

  // Specific Datas
  getLastMeasurementLoading = true;
  lastMeasurement: IObservation;
  getLastMeasurementSub: Subscription;

  // Blood Types
  bloodType: any;
  bloodTypeLoaded = false;

  // Medications
  medicationStatements: IMedicationStatement[] = [];

  // Appointments a.k.a Visits
  appointments: IAppointment[] = [];

  // Conditions
  conditions: ICondition[] = [];

  // Taked Medications  a.k.a Medication Requests
  medications: IMedication[] = [];
  takedMedications: IMedicationRequest[] = [];
  medicationsLoaded = false;

  // AllergyIntolerances
  allergyIntolerances: IAllergyIntolerance[] = [];
  allergyIntoleranceLoaded = false;

  modalComponents: AssociativeArray = {
    medication: () => MedicationModalComponent,
    appointment: () => AppointmentModalComponent,
    condition: () => ConditionModalComponent,
    takedMedication: () => TakedMedicationModalComponent
  };

  constructor(
    private modalService: ModalService, private ObservationService: SleepObservationService,
    private bloodTypeService: BloodTypeService, private medicationStatementService: MedicationStatementService,
    private appointmentService: AppointmentService, private conditionService: ConditionService,
    private allergyIntoleranceService: AllergyIntoleranceService, private medicationService: MedicationService,
    private takedMedicationService: MedicationRequestService, private actionSheetController: ActionSheetController,
    private translatePipe: TranslatePipe, private alertService: AlertService) { }

  ngOnInit() {
    this.getLastMeasurementSub = this.ObservationService.getAllBySubject(this.patient.id).subscribe((observation: IObservation[]) => {
      this.lastMeasurement = observation[0];
      this.getLastMeasurementLoading = false;
    }, error => {
      console.error(error);
      this.getLastMeasurementLoading = false;
    });
    this.get('condition');
    this.get('medicationStatement');
    this.get('appointment');
    this.getMedication();
    this.get('takedMedication');
    this.get('allergyIntolerance');
    this.get2('bloodType');
  }

  openModal(componentName: string, editableData?, extraData?) {
    const params: any = { patient: this.patient, user: this.user };
    if (editableData) {
      Object.assign(params, { inData: editableData });
    }
    if (extraData) {
      Object.assign(params, { extraData });
    }

    this.modalService.presentModal(this.modalComponents[componentName](), params).then(modal => {
      modal.onDidDismiss().then(detail => {
        if (detail && detail.data) {
          if (editableData) {
            this[componentName + 'Service'].update(detail.data);
          } else {
            this[componentName + 'Service'].add(detail.data);
          }
        }
      });
    });
  }

  openDeleteAlert(componentName: string, id: string) {
    this.alertService.presentDelete(id, componentName.toUpperCase(), () => { this[componentName + 'Service'].delete(id); });
  }

  onCallSave(componentName: string, event) {
    if (event) {
      this[componentName + 'Service'].add(event);
    }
  }

  onCallUpdate(componentName: string, event) {
    if (event) {
      this[componentName + 'Service'].update(event);
    }
  }

  onCallMore(componentName: string, data, extraData?) {
    if (data) {
      this.openActionSheet(componentName, data, extraData);
    }
  }

  get(componentName: string) {
    this[componentName + 'Service'].getByPatient(this.patient.id).subscribe((data) => {
      this[componentName + 's'] = data;
      if (componentName === 'medicationStatement') {
        this.medicationStatements = this.medicationStatements.filter(item => item.status === 'intended');
      } else if (componentName === 'allergyIntolerance') {
        this[componentName + 'Loaded'] = true;
      }
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

  getMedication(): void {
    this.medicationService.getAll().subscribe((data: IMedication[]) => {
      if (data.length > 0) {
        this.medications = data;
      }
      this.medicationsLoaded = true;
    }, (error) => {
      this.medicationsLoaded = true;
      console.error('error at medications get: ', error);
    });
  }

  async openActionSheet(componentName: string, inData, extraData?) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: this.translatePipe.transform('EDIT_L'),
        icon: 'create',
        handler: () => { this.openModal(componentName, inData, extraData); }
      },
      {
        text: this.translatePipe.transform('DELETE_L'),
        icon: 'trash',
        handler: () => { this.openDeleteAlert(componentName, inData.id); }
      }]
    });
    await actionSheet.present();
  }

  getMedicationForTakedMedication(medicationId: string): IMedication {
    return this.medications.find((medication: IMedication) => medication.id === medicationId);
  }
}
