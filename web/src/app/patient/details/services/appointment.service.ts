import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IAppointment } from '@ahryman40k/ts-fhir-types/lib/R4';
import { AppointmentApi } from '@inclouded/fhir-appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  api: AppointmentApi;

  constructor(private afs: AngularFirestore) {
    this.api = new AppointmentApi(this.afs, null);
  }

  getByPatient(patientId: string): Observable<IAppointment[]> {
    return this.api.getAppointmentsByPatient(patientId);
  }

  add(data: IAppointment) {
    return this.api.add(data);
  }

  delete(id: string) {
    return this.api.delete(id);
  }

  update(data: IAppointment) {
    return this.api.update(data);
  }
}
