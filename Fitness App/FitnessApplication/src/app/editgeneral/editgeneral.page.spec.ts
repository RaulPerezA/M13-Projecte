import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditgeneralPage } from './editgeneral.page';

describe('EditgeneralPage', () => {
  let component: EditgeneralPage;
  let fixture: ComponentFixture<EditgeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditgeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditgeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
