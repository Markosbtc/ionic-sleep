import { Injectable } from '@angular/core';
import { GINAObservationApi } from '@inclouded/fhir-observation';
import { AngularFirestore } from '@angular/fire/firestore';
import { Paging, OrderBy } from '@inclouded/fhirapi';
import { Observable } from 'rxjs';
import { IObservation } from '@ahryman40k/ts-fhir-types/lib/R4';

@Injectable({
  providedIn: 'root'
})
export class GinaService {
  api: GINAObservationApi;

  constructor(private afs: AngularFirestore) {
    this.api = new GINAObservationApi(this.afs);
  }

  getAll(paging?: Paging, orderBy?: OrderBy): Observable<IObservation[]> {
    return this.api.getAll(paging, orderBy);
  }

  getGINAObservationByPatient(patientId: string, paging?: Paging, orderBy?: OrderBy): Observable<IObservation[]> {
    return this.api.getGINAObservationByPatient(patientId, paging, orderBy);
  }

  add(gina: IObservation): Promise<IObservation> {
    return this.api.add(gina);
  }

  delete(id: string): Promise<void> {
    return this.api.delete(id);
  }

  update(gina: IObservation): Promise<IObservation> {
    return this.api.update(gina);
  }
}
