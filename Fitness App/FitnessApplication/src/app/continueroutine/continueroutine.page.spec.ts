import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContinueroutinePage } from './continueroutine.page';

describe('ContinueroutinePage', () => {
  let component: ContinueroutinePage;
  let fixture: ComponentFixture<ContinueroutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueroutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContinueroutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
