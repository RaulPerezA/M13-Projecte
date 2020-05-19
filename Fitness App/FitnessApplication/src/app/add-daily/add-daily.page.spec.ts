import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDailyPage } from './add-daily.page';

describe('AddDailyPage', () => {
  let component: AddDailyPage;
  let fixture: ComponentFixture<AddDailyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDailyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
