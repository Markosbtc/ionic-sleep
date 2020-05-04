import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMedicationRequest } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Observable } from 'rxjs';
import { MedicationRequestApi } from '@inclouded/fhir-medicationrequest';
import { OrderBy, Paging } from '@inclouded/fhirapi';

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

  getMedicationRequestsbySubject(subject: string, orderBy?: OrderBy, paging?: Paging): Observable<IMedicationRequest[]> {
    return this.api.getMedicationRequestsbySubject(subject, orderBy, paging);
  }

  getMedicationRequestsbyMedicationReference(medicationReference: string, orderBy?: OrderBy, paging?: Paging):
    Observable<IMedicationRequest[]> {
    return this.api.getMedicationRequestsbyMedicationReference(medicationReference, orderBy, paging);
  }

  getMedicationRequestsbyRequester(requester: string, orderBy?: OrderBy, paging?: Paging): Observable<IMedicationRequest[]> {
    return this.api.getMedicationRequestsbyRequester(requester, orderBy, paging);
  }

  getMedicationRequestsbyAuthoredOn(authoredOn: string, orderBy?: OrderBy, paging?: Paging): Observable<IMedicationRequest[]> {
    return this.api.getMedicationRequestsbyAuthoredOn(authoredOn, orderBy, paging);
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
