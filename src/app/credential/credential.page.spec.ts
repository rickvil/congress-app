import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CredentialPage } from './credential.page';

describe('CredentialPage', () => {
  let component: CredentialPage;
  let fixture: ComponentFixture<CredentialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CredentialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
