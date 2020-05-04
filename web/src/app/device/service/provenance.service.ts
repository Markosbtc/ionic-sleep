import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProvenanceApi } from '@inclouded/fhir-provenance';
import { IProvenance } from '@ahryman40k/ts-fhir-types/lib/R4';

@Injectable({
  providedIn: 'root'
})
export class ProvenanceService {

  provenanceApi: ProvenanceApi;

  constructor(private afs: AngularFirestore) {
    this.provenanceApi = new ProvenanceApi(this.afs);
  }

  getProvenances(id: string) {
    return this.provenanceApi.getProvenancesbyEntity(id, { orderBy: 'data.recorded', direction: 'desc' });
  }

  addProvenance(provenance: IProvenance) {
    return this.provenanceApi.add(provenance);
  }

}
