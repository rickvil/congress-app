import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrganizersPage } from './organizers.page';

describe('OrganizersPage', () => {
  let component: OrganizersPage;
  let fixture: ComponentFixture<OrganizersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
