import { Injectable } from '@angular/core';
import { MedicationApi } from '@inclouded/fhir-medication';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMedication } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Observable } from 'rxjs';
import { OrderBy, Paging } from '@inclouded/fhirapi';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  api: MedicationApi;

  constructor(private afs: AngularFirestore) {
    this.api = new MedicationApi(this.afs);
  }

  getAll(paging?: Paging, orderBy?: OrderBy): any {
    return this.api.getAll(paging, orderBy);
  }

  add(data: IMedication) {
    return this.api.add(data);
  }

  delete(id: string) {
    return this.api.delete(id);
  }

  update(data: IMedication) {
    return this.api.update(data);
  }

  getMedicationByCode(code: string, orderBy?: OrderBy, paging?: Paging): Observable<IMedication[]> {
    return this.api.getMedicationByCode(code, orderBy, paging);
  }

  getMedicationByStatus(status: string, orderBy?: OrderBy, paging?: Paging): Observable<IMedication[]> {
    return this.api.getMedicationByStatus(status, orderBy, paging);
  }

  getMedicationByForm(form: string, orderBy?: OrderBy, paging?: Paging): Observable<IMedication[]> {
    return this.api.getMedicationByForm(form, orderBy, paging);
  }

  getMedicationByBatch(batch: string, orderBy?: OrderBy, paging?: Paging): Observable<IMedication[]> {
    return this.api.getMedicationByBatch(batch, orderBy, paging);
  }
}
