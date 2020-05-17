import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContentgeneralrutinePage } from './contentgeneralrutine.page';

describe('ContentgeneralrutinePage', () => {
  let component: ContentgeneralrutinePage;
  let fixture: ComponentFixture<ContentgeneralrutinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentgeneralrutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentgeneralrutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
