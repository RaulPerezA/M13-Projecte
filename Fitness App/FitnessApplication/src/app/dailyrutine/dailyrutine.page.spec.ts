import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyrutinePage } from './dailyrutine.page';

describe('DailyrutinePage', () => {
  let component: DailyrutinePage;
  let fixture: ComponentFixture<DailyrutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyrutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyrutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
