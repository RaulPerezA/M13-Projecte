import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnerecetaPage } from './onereceta.page';

describe('OnerecetaPage', () => {
  let component: OnerecetaPage;
  let fixture: ComponentFixture<OnerecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnerecetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnerecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
