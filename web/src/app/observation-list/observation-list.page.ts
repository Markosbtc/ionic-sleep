import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observation-list',
  templateUrl: './observation-list.page.html',
  styleUrls: ['./observation-list.page.scss'],
})
export class ObservationListPage implements OnInit {
  title = 'DASHBOARD';
  loading = true;


  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

}