import { Injectable } from '@angular/core';
import { ICondition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConditionApi } from '@inclouded/fhir-condition';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {
  conditionApi: ConditionApi;

  constructor(private afs: AngularFirestore) {
    this.conditionApi = new ConditionApi(this.afs);
  }

  getByPatient(patientId: string): Observable<ICondition[]> {
    return this.conditionApi.getConditionsByPatient(patientId);
  }

  add(condition: ICondition) {
    return this.conditionApi.add(condition);
  }

  delete(id: string) {
    return this.conditionApi.delete(id);
  }

  update(condition: ICondition) {
    return this.conditionApi.update(condition);
  }
}
