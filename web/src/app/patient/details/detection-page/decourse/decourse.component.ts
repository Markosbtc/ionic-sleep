import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslatePipe, AssociativeArray, AlertService, ModalService } from '@inclouded/ionic4-inclouded-lib';
import { IPatient } from '@ahryman40k/ts-fhir-types/lib/R4';
import { DecourseService } from '../../services/decourse.service';
import { DecourseAddModalComponent } from './decourse-add-modal/decourse-add-modal.component';

@Component({
  selector: 'app-decourse',
  templateUrl: './decourse.component.html',
  styleUrls: ['./decourse.component.scss'],
})
export class DecourseComponent implements OnInit {
  @Input() patient: IPatient;
  @Input() user: any;

  loading = true;

  decourses: any[] = [];

  modalComponents: AssociativeArray = {
    decourse: () => DecourseAddModalComponent
  };

  constructor(
    private actionSheetController: ActionSheetController, private translatePipe: TranslatePipe,
    private modalService: ModalService, private alertService: AlertService, private decourseService: DecourseService) { }

  ngOnInit() {
    this.getData(0);
  }

  getData(index: number): void {

    if (index === 0) {

    } else {

    }

    this.loading = true;

    this.decourseService.getByPatient(this.patient.id).then(res => {
      this.decourses = res;
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });
  }

  onCallMore(componentName: string, data) {
    if (data) {
      this.openActionSheet(componentName, data);
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

  openModal(componentName: string, editableData?) {
    let params: any = { patient: this.patient, user: this.user };
    if (editableData) {
      params = { patient: this.patient, user: this.user, inData: editableData };
    }
    this.modalService.presentModal(this.modalComponents[componentName](), params).then(modal => {
      modal.onDidDismiss().then(detail => {
        if (detail && detail.data) {
          if (editableData) {
            this[componentName + 'Service'].update(detail.data).then(() => {
              this.decourseService.getByPatient(this.patient.id).then(res => {
                this.decourses = res;
              });
            });
          } else {
            this[componentName + 'Service'].add(detail.data).then(() => {
              this.decourseService.getByPatient(this.patient.id).then(res => {
                this.decourses = res;
              });
            });
          }
        }
      });
    });
  }

  openDeleteAlert(componentName: string, id: string) {
    this.alertService.presentDelete(id, componentName.toUpperCase(), () => {
      this[componentName + 'Service'].delete(id).then(() => {
        this.decourseService.getByPatient(this.patient.id).then(res => {
          this.decourses = res;
        });
      });
    });
  }

  onTabChange(event): void {
    this.getData(event);
  }
}
