import { DeviceService } from './../service/device.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGenModel, ToastService, LoadingService, AlertService } from '@inclouded/ionic4-inclouded-lib';
import { IDevice } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
// spirométer
export const TYPE_LIST: FormGenModel[] = [
  { label: 'CELL_PHONE', value: 'CELL_PHONE' },
  { label: 'ACCESSORY', value: 'ACCESSORY' },
  { label: 'SPIROMETER', value: 'SPIROMETER' }
];

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.page.html',
  styleUrls: ['./device-add.page.scss'],
})
export class DeviceAddPage implements OnInit, OnDestroy {
  title = 'ADD_DEVICE';
  typeList = TYPE_LIST;
  getDeviceRoute: Subscription;
  deviceForUpdate: IDevice;

  constructor(
    private deviceService: DeviceService, private loadingService: LoadingService, private alertService: AlertService,
    private toastService: ToastService, private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getDeviceFromRoute();
  }

  ngOnDestroy() {
    if (this.getDeviceRoute) {
      this.getDeviceRoute.unsubscribe();
    }
    localStorage.removeItem('device');
  }

  getDeviceFromRoute() {
    this.getDeviceRoute = this.activatedRoute.paramMap.subscribe(() => {
      const device: IDevice = window.history.state.parameter;
      if (device) {
        localStorage.setItem('device', JSON.stringify(device));
      }
      this.deviceForUpdate = JSON.parse(localStorage.getItem('device'));
      if (this.deviceForUpdate) {
        this.title = 'MODIFICATION_DEVICE';
      }
    });
  }

  save(device: IDevice) {
    this.loadingService.presentLoading('ADD_DEVICE');
    this.deviceService.addDevice(device).then(
      () => {
        this.toastService.presentToast('ADD_DEVICE_SUCCESS');
      }, () => {
        this.alertService.presentError('ADD_DEVICE_UNSUCCESSFULL');
      }).finally(() => {
        this.loadingService.dismissLoading();
      });
  }

  update(device: IDevice) {
    this.loadingService.presentLoading('MODIFICATION_DEVICE');
    this.deviceService.updateDevice(device).then(
      () => {
        localStorage.setItem('device', JSON.stringify(device));
        this.toastService.presentToast('UPDATE_DEVICE_SUCCESS');
      }, () => {
        this.alertService.presentError('UPDATE_DEVICE_UNSUCCESSFULL');
      }).finally(() => {
        this.loadingService.dismissLoading();
      });
  }

}
