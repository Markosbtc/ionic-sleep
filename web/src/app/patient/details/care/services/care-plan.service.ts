import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CarePlanApi } from '@inclouded/fhir-careplan';
import { Observable } from 'rxjs';
import { ICarePlan } from '@ahryman40k/ts-fhir-types/lib/R4';

@Injectable({
  providedIn: 'root'
})
export class CarePlanService {

  api: CarePlanApi;

  constructor(private afs: AngularFirestore) {
    this.api = new CarePlanApi(this.afs);
  }

  getByPatient(patientId: string, status?: string): Observable<ICarePlan[]> {
    return this.api.getCarePlansBySubject(patientId, status);
  }

  add(data: ICarePlan) {
    return this.api.add(data);
  }

  delete(id: string) {
    return this.api.delete(id);
  }

  update(data: ICarePlan) {
    return this.api.update(data);
  }
}
