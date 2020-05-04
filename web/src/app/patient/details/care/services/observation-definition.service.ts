import { Injectable } from '@angular/core';
import { ObservationDefinitionApi } from '@inclouded/fhir-observationdefinition';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IObservationDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

@Injectable({
  providedIn: 'root'
})
export class ObservationDefinitionService {

  api: ObservationDefinitionApi;

  constructor(private afs: AngularFirestore) {
    this.api = new ObservationDefinitionApi(this.afs);
  }

  getById(id: string): Observable<IObservationDefinition[]> {
    return this.api.getById(id);
  }

  add(data: IObservationDefinition) {
    return this.api.add(data);
  }

  delete(id: string) {
    return this.api.delete(id);
  }

  update(data: IObservationDefinition) {
    return this.api.update(data);
  }
}
