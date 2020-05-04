import { DeviceService } from './../service/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.page.html',
  styleUrls: ['./device-list.page.scss'],
})
export class DeviceListPage implements OnInit {
  loading = true;
  deviceList: any[];
  defPageSize = 10;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    localStorage.removeItem('device');
    this.search(this.defPageSize);
  }

  onSizeSortChange(event: any) {
    if (event) {
      this.search(event.pageSize, event.sort);
    }
  }

  onCallDelete(event: any) {
    if (event) {
      this.deviceService.deleteDevice(event).then(
        () => {
          /* this.resetFilters(); */
        }
      );
    }
  }

  search(pageSize: number, sort?: { active: string, direction: string }) {
    if (!this.deviceList) {
      this.loading = true;
    }
    this.getAllDevices(pageSize, sort).subscribe(result => {
      this.deviceList = result;
      this.loading = false;
      /* if (this.identifier || this.status || this.type) {
        this.filtered = true;
      } */
    }, () => {
      this.loading = false;
      this.deviceList = undefined;
    });
  }

  getAllDevices(pageSize?: number, sort?: { active: string, direction: any }) {
    let active: string;
    let direction: any;
    if (sort && !sort.direction) {
      sort.active = undefined;
    }
    if (sort && sort.active && sort.direction) {
      active = sort.active;
      direction = sort.direction;
    }
    return this.deviceService.getAllDevices(active, direction);
  }

}
