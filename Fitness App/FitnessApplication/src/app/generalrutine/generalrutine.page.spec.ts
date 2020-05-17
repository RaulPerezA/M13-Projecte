import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralrutinePage } from './generalrutine.page';

describe('GeneralrutinePage', () => {
  let component: GeneralrutinePage;
  let fixture: ComponentFixture<GeneralrutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralrutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralrutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
