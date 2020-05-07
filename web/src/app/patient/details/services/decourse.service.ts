import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DecourseService {

  constructor(private afs: AngularFirestore) { }

  add(decourse: any): Promise<any> {
    decourse.date = new Date(decourse.onsetDateTime).toISOString();

    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('Decourses-DEMO')
        .add(decourse)
        .then(res => {
          resolve(res);
          this.afs
          .collection('Decourses-DEMO')
          .doc(res.id)
          .update({id: res.id});
        }, err => reject(err));
    });
  }

  update(decourse: any): Promise<any> {
    decourse.date = (decourse.date as Date).toISOString();
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('Decourses-DEMO')
        .doc(decourse.id)
        .update(decourse)
        .then(res => { resolve(res); }, err => reject(err));
    });
  }

  delete(decourseId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.afs
        .collection('Decourses-DEMO')
        .doc(decourseId)
        .delete()
        .then(res => { resolve(res); }, err => reject(err));
    });
  }

  async getByPatient(patientId: string): Promise<any> {
    const docs = await this.afs.collection('Decourses-DEMO', ref => ref.where('subject.reference', '==', patientId))
      .valueChanges()
      .pipe(take(1))
      .toPromise();

    docs.forEach((doc: any) => {
      doc.date = new Date(doc.date);
    });

    return docs;
  }
}

