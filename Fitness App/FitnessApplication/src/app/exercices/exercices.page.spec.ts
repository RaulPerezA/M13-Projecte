import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExercicesPage } from './exercices.page';

describe('ExercicesPage', () => {
  let component: ExercicesPage;
  let fixture: ComponentFixture<ExercicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
