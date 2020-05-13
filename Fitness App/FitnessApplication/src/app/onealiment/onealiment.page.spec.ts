import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnealimentPage } from './onealiment.page';

describe('OnealimentPage', () => {
  let component: OnealimentPage;
  let fixture: ComponentFixture<OnealimentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnealimentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnealimentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
