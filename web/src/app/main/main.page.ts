import { Component, OnInit } from '@angular/core';
import { NavLink } from '@inclouded/ionic4-inclouded-lib';

export const NAVLIST: NavLink[] = [
  {
    id: 'observation-list',
    label: 'DASHBOARD',
    url: '/main/observation-list',
    icon: 'clipboard',
    disabled: false,
  },
  {
    id: 'sleep',
    label: 'SLEEP',
    url: '/main/sleep',
    icon: 'bed',
    disabled: false,
  },
  {
    id: 'patient-list',
    label: 'PATIENT_LIST',
    url: '/main/patient-list',
    icon: 'people',
    disabled: false,
},
{
    id: 'device-list',
    label: 'DEVICES',
    url: '/main/device-list',
    icon: 'phone-portrait',
    disabled: false,
}

];

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  navTitle = 'Sleep portál';
  navList: NavLink[] = NAVLIST;

  constructor() { }

  ngOnInit() { }

}
