import { ProvenanceService } from './../service/provenance.service';
import { AlertService } from '@inclouded/ionic4-inclouded-lib';
import { Subscription } from 'rxjs';
import { IDevice, DeviceStatusKind, IProvenance } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DeviceService } from '../service/device.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.page.html',
  styleUrls: ['./device-details.page.scss'],
})
export class DeviceDetailsPage implements OnInit, OnDestroy {
  device: IDevice;
  getDeviceRoute: Subscription;
  provList: MatTableDataSource<IProvenance>;

  constructor(
    private activatedRoute: ActivatedRoute, private router: Router, private deviceService: DeviceService,
    private provenanceService: ProvenanceService,
    private alertService: AlertService, public storage: Storage
  ) { }

  ngOnInit() {
    this.getDeviceFromRoute();
  }

  ngOnDestroy() {
    if (this.getDeviceRoute) {
      this.getDeviceRoute.unsubscribe();
    }
    localStorage.removeItem('device');
  }

  getDeviceFromRoute() {
    this.getDeviceRoute = this.activatedRoute.paramMap.subscribe(() => {
      const device: IDevice = window.history.state.parameter;
      if (device) {
        localStorage.setItem('device', JSON.stringify(device));
      }
      this.device = JSON.parse(localStorage.getItem('device'));
      this.getProvenances();
    });
  }

  getProvenances() {
    if (this.device) {
      this.provenanceService.getProvenances(this.device.id).subscribe(result => {
        if (result) {
          this.provList = new MatTableDataSource(result);
        }
      });
    }
  }

  onCallDelete(event: any) {
    if (event) {
      this.deviceService.deleteDevice(event).then(
        () => {
          this.router.navigateByUrl('/main/device-list');
        }
      );
    }
  }

  onCallUpdate(event: any) {
    if (event) {
      const status = DeviceStatusKind;
      let comment = '';
      event.device.status = status['_' + event.status] as DeviceStatusKind;
      event.device.patient.reference = event.statusValue.taj;
      event.device.patient.display = event.statusValue.name;
      comment = event.statusValue.comment;
      this.deviceService.updateDevice(event.device).then(() => {
        this.device = event.device;
        this.addProv(this.device, comment);
        localStorage.setItem('device', JSON.stringify(this.device));
      }, () => {
        this.alertService.presentError('UPDATE_DEVICE_UNSUCCESSFULL');
      });
    }
  }

  async addProv(device: IDevice, comment: string) {
    const user = await this.storage.get('user');
    const prov: any = {
      agent: [{
        who: {
          display: user.displayName || '',
          reference: user.uid
        },
      }],
      entity: [{
        what: {
          reference: device.id,
          display: device.identifier[0].value
        }
      }],
      reason: [{
        text: device.status
      }, { text: comment }],
      recorded: new Date(),
      target: [device.patient]
    };
    this.provenanceService.addProvenance(prov).then(() => { }, () => { });
  }

}
