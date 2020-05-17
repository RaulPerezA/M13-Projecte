import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculatorweightPage } from './calculatorweight.page';

describe('CalculatorweightPage', () => {
  let component: CalculatorweightPage;
  let fixture: ComponentFixture<CalculatorweightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorweightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorweightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
