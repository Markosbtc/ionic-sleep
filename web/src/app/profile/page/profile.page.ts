import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@inclouded/ionic4-inclouded-lib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  role = 'ROLE_VALUE';

  constructor(private translatePipe: TranslatePipe) { }

  ngOnInit() {
    this.role = this.translatePipe.transform(this.role);
  }

}
