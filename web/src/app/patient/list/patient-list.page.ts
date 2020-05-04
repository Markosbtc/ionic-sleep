import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPatient } from '@ahryman40k/ts-fhir-types/lib/R4';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage implements OnInit, OnDestroy {
  loading = true;
  filtered = false;
  order: string;
  search = { mode: '', value: '' };
  getPatientsSub: Subscription;
  patientList: IPatient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatient();
  }

  ngOnDestroy() {
    if (this.getPatientsSub) {
      this.getPatientsSub.unsubscribe();
    }
  }

  getAllPatient() {
    this.patientService.getAllPatient(this.order, this.search.mode, this.search.value).subscribe((result: IPatient[]) => {
      this.patientList = result;
      this.loading = false;
      this.filtered = false;
      if (this.search.value) {
        this.filtered = true;
      }
    }, (err) => {
      console.log(err);
      this.filtered = false;
      this.loading = false;
      this.patientList = undefined;
    });
  }

  onCallSearch(event: any): void {
    this.search = event;
    this.getAllPatient();
  }

  onCallOrder(event: any): void {
    this.order = event;
    this.getAllPatient();
  }
}
