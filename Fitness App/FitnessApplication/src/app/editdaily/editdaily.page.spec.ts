import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditdailyPage } from './editdaily.page';

describe('EditdailyPage', () => {
  let component: EditdailyPage;
  let fixture: ComponentFixture<EditdailyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdailyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditdailyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
