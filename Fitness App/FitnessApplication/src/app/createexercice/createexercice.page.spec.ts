import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateexercicePage } from './createexercice.page';

describe('CreateexercicePage', () => {
  let component: CreateexercicePage;
  let fixture: ComponentFixture<CreateexercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateexercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateexercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
