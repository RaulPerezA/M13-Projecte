import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListexercicePage } from './listexercice.page';

describe('ListexercicePage', () => {
  let component: ListexercicePage;
  let fixture: ComponentFixture<ListexercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListexercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListexercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
