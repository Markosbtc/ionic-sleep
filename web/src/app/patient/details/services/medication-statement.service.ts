import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IMedicationStatement } from '@ahryman40k/ts-fhir-types/lib/R4';
import { MedicationStatementApi } from '@inclouded/fhir-medicationstatement';

@Injectable({
  providedIn: 'root'
})
export class MedicationStatementService {
  api: MedicationStatementApi;

  constructor(private afs: AngularFirestore) {
    this.api = new MedicationStatementApi(this.afs);
  }

  getByPatient(patientId: string): Observable<IMedicationStatement[]> {
    return this.api.getMedicationStatementbyPatient(patientId);
  }

  add(data: IMedicationStatement) {
    return this.api.add(data);
  }

  delete(id: string) {
    return this.api.delete(id);
  }

  update(data: IMedicationStatement) {
    return this.api.update(data);
  }
}
