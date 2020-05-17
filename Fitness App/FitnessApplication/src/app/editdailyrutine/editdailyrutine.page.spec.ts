import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditdailyrutinePage } from './editdailyrutine.page';

describe('EditdailyrutinePage', () => {
  let component: EditdailyrutinePage;
  let fixture: ComponentFixture<EditdailyrutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdailyrutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditdailyrutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
