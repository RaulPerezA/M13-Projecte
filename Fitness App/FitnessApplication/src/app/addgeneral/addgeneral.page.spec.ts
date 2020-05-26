import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddgeneralPage } from './addgeneral.page';

describe('AddgeneralPage', () => {
  let component: AddgeneralPage;
  let fixture: ComponentFixture<AddgeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddgeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
