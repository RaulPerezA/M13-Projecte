import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietsPage } from './diets.page';

describe('DietsPage', () => {
  let component: DietsPage;
  let fixture: ComponentFixture<DietsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
