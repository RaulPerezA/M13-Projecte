import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExercicePage } from './exercice.page';

describe('ExercicePage', () => {
  let component: ExercicePage;
  let fixture: ComponentFixture<ExercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
