import { Injectable } from '@angular/core';
import { IObservation } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { BloodTypeObservationApi } from '@inclouded/fhir-observation';

@Injectable({
  providedIn: 'root'
})
export class BloodTypeService {

  api: BloodTypeObservationApi;

  constructor(private afs: AngularFirestore) {
    this.api = new BloodTypeObservationApi(this.afs);
  }

  getByPatient(patientId: string): Observable<IObservation[]> {
    return this.api.getBloodTypeObservationByPatient(patientId);
  }

  add(data: IObservation) {
    return this.api.add(data);
  }

  delete(id: string) {
    return this.api.delete(id);
  }

  update(data: IObservation) {
    return this.api.update(data);
  }
}
