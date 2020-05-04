import { Injectable } from '@angular/core';
import { DeviceApi } from '@inclouded/fhir-device';
import { AngularFirestore } from '@angular/fire/firestore';
import { IDevice } from '@ahryman40k/ts-fhir-types/lib/R4';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  deviceApi: DeviceApi;

  constructor(private afs: AngularFirestore) {
    this.deviceApi = new DeviceApi(this.afs);
  }

  getAllDevices(orderBy?: string, direction?: any, pageSize?: number) {
    return this.deviceApi.getAllDevices(null, null, null, null, null, orderBy, direction, { limit: pageSize });
  }

  addDevice(device: IDevice) {
    return this.deviceApi.add(device);
  }

  updateDevice(device: IDevice) {
    return this.deviceApi.update(device);
  }

  deleteDevice(id: string) {
    return this.deviceApi.delete(id);
  }
}
