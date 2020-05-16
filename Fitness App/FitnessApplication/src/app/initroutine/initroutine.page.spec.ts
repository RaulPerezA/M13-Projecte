import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitroutinePage } from './initroutine.page';

describe('InitroutinePage', () => {
  let component: InitroutinePage;
  let fixture: ComponentFixture<InitroutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitroutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitroutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
