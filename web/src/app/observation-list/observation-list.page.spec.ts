import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservationListPage } from './observation-list.page';

describe('ObservationListPage', () => {
  let component: ObservationListPage;
  let fixture: ComponentFixture<ObservationListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
