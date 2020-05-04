import { Injectable } from '@angular/core';
import { AllergyIntoleranceApi } from '@inclouded/fhir-allergyintolerance';
import { AngularFirestore } from '@angular/fire/firestore';
import { OrderBy, Paging } from '@inclouded/fhirapi';
import { Observable } from 'rxjs';
import { IAllergyIntolerance } from '@ahryman40k/ts-fhir-types/lib/R4';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class AllergyIntoleranceService {

  allergyIntoleranceApi: AllergyIntoleranceApi;

  constructor(private afs: AngularFirestore) {
    this.allergyIntoleranceApi = new AllergyIntoleranceApi(this.afs);
  }

  getAll(paging?: Paging, orderBy?: OrderBy): any {
    return this.allergyIntoleranceApi.getAll(paging, orderBy);
  }

  add(data: any, id?: string): Promise<any> {
    return this.allergyIntoleranceApi.add(data, id);
  }

  update(data: any): Promise<any> {
    return this.allergyIntoleranceApi.update(data);
  }

  delete(id: string): Promise<void> {
    return this.allergyIntoleranceApi.delete(id);
  }

  getById(id: string): Observable<any> {
    return this.allergyIntoleranceApi.getById(id);
  }

  getByPatient(patient: string, orderBy?: OrderBy, paging?: Paging): Observable<IAllergyIntolerance[]> {
    return this.allergyIntoleranceApi.getAllergyIntolerancesByPatient(patient, orderBy, paging);
  }

  getAllergyIntolerancesByClinicalStatus(clinicalStatus: string, orderBy?: OrderBy, paging?: Paging): Observable<IAllergyIntolerance[]> {
    return this.allergyIntoleranceApi.getAllergyIntolerancesByClinicalStatus(clinicalStatus, orderBy, paging);
  }

  getAllergyIntolerancesByType(type: string, orderBy?: OrderBy, paging?: Paging): Observable<IAllergyIntolerance[]> {
    return this.allergyIntoleranceApi.getAllergyIntolerancesByType(type, orderBy, paging);
  }

  getAllergyIntolerancesByCategory(category: string, orderBy?: OrderBy, paging?: Paging): Observable<IAllergyIntolerance[]> {
    return this.allergyIntoleranceApi.getAllergyIntolerancesByCategory(category, orderBy, paging);
  }

  getAllergyIntolerancesByCodeText(codeText: string, orderBy?: OrderBy, paging?: Paging): Observable<IAllergyIntolerance[]> {
    return this.allergyIntoleranceApi.getAllergyIntolerancesByCodeText(codeText, orderBy, paging);
  }
}
