import { Component, OnInit } from '@angular/core';
import {Organizer} from '../../models/organizer.model';
import {OrganizerService} from '../../services/organizer.service';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.page.html',
  styleUrls: ['./organizers.page.scss'],
})
export class OrganizersPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public organizers: Array<Organizer>;

  constructor(private organizerService: OrganizerService) { }

  ngOnInit() {
    this.organizerService.getAllOrganizers().then((organizers) => {
      this.organizers = organizers;
    });
  }
}
