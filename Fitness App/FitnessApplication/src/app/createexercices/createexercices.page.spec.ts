import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateexercicesPage } from './createexercices.page';

describe('CreateexercicesPage', () => {
  let component: CreateexercicesPage;
  let fixture: ComponentFixture<CreateexercicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateexercicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateexercicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
