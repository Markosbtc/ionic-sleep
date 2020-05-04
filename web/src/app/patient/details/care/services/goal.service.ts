import { Injectable } from '@angular/core';
import { GoalApi } from '@inclouded/fhir-goal';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IGoal } from '@ahryman40k/ts-fhir-types/lib/R4';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  api: GoalApi;

  constructor(private afs: AngularFirestore) {
    this.api = new GoalApi(this.afs);
  }

  getById(id: string): Observable<IGoal[]> {
    return this.api.getById(id);
  }

  add(data: IGoal) {
    return this.api.add(data);
  }

  delete(id: string) {
    return this.api.delete(id);
  }

  update(data: IGoal) {
    return this.api.update(data);
  }
}
