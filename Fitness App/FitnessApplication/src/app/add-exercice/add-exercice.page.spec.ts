import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddExercicePage } from './add-exercice.page';

describe('AddExercicePage', () => {
  let component: AddExercicePage;
  let fixture: ComponentFixture<AddExercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddExercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
