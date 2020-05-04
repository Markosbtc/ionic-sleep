import { Injectable } from '@angular/core';
import { MedicationRequestApi } from '@inclouded/fhir-medicationrequest';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMedicationRequest } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationRequestService {
  api: MedicationRequestApi;

  constructor(private afs: AngularFirestore) {
    this.api = new MedicationRequestApi(this.afs);
  }

  getByPatient(patientId: string): Observable<IMedicationRequest[]> {
    return this.api.getMedicationRequestsbySubject(patientId);
  }

  add(data: IMedicationRequest) {
    return this.api.add(data);
  }

  delete(id: string) {
    return this.api.delete(id);
  }

  update(data: IMedicationRequest) {
    return this.api.update(data);
  }
}
