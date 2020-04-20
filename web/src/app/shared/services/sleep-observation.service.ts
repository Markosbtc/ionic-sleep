import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SleepingObservationApi } from '@inclouded/fhir-observation';
import { Paging, OrderBy } from '@inclouded/fhirapi';
import { Observable } from 'rxjs';
import { IObservation } from '@ahryman40k/ts-fhir-types/lib/R4';


@Injectable({
  providedIn: 'root'
})
export class SleepObservationService {
  sleepingObservationApi: SleepingObservationApi;

  constructor(private afs: AngularFirestore) {
    this.sleepingObservationApi = new SleepingObservationApi(this.afs);
  }

  add(data: any, id?: string): Promise<any> {
    return this.sleepingObservationApi.add(data, id);
  }

  getAll(paging?: Paging, orderBy?: OrderBy): Observable<IObservation[]> {
    return this.sleepingObservationApi.getAll(paging, orderBy);
  }

  getAllByDateInterval(fromDate: Date, toDate: Date, orderBy?: OrderBy, paging?: Paging): Observable<IObservation[]> {
    return this.sleepingObservationApi.getAllByDateInterval(fromDate, toDate, orderBy, paging);
  }

  getAllBySubject(subject: string, orderBy?: OrderBy, paging?: Paging): Observable<IObservation[]> {
    return this.sleepingObservationApi.getAllBySubject(subject, orderBy, paging);
  }

  // tslint:disable-next-line: max-line-length
  getAllBySubjectAndDateInterval(subject: string, fromDate: Date, toDate: Date, orderBy?: OrderBy, paging?: Paging): Observable<IObservation[]> {
    return this.sleepingObservationApi.getAllBySubjectAndDateInterval(subject, fromDate, toDate, orderBy, paging);
  }

  getLastObservationBySubject(subject: string): Observable<IObservation> {
    return this.sleepingObservationApi.getLastObservationBySubject(subject);
  }


}
