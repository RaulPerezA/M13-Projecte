import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifydailyrutinePage } from './modifydailyrutine.page';

describe('ModifydailyrutinePage', () => {
  let component: ModifydailyrutinePage;
  let fixture: ComponentFixture<ModifydailyrutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifydailyrutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifydailyrutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
