import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigureExercicePage } from './configure-exercice.page';

describe('ConfigureExercicePage', () => {
  let component: ConfigureExercicePage;
  let fixture: ComponentFixture<ConfigureExercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureExercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigureExercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
