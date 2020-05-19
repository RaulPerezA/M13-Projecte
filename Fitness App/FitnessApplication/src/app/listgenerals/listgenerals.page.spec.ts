import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListgeneralsPage } from './listgenerals.page';

describe('ListgeneralsPage', () => {
  let component: ListgeneralsPage;
  let fixture: ComponentFixture<ListgeneralsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListgeneralsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListgeneralsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
