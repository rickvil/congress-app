import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeakersPage } from './speakers.page';

describe('SpeakersPage', () => {
  let component: SpeakersPage;
  let fixture: ComponentFixture<SpeakersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
