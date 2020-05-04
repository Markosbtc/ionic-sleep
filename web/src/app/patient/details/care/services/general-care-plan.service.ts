import { Injectable } from '@angular/core';
import { GeneralCarePlanApi } from '@inclouded/fhir-careplan';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICarePlan } from '@ahryman40k/ts-fhir-types/lib/R4';

@Injectable({
  providedIn: 'root'
})
export class GeneralCarePlanService {

  api: GeneralCarePlanApi;

  constructor(private afs: AngularFirestore) {
    this.api = new GeneralCarePlanApi(this.afs);
  }

  getByPatient(patientId: string): Observable<ICarePlan[]> {
    return this.api.getbySubject(patientId);
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
