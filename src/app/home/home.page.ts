import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}


  goSpeakers() {
    this.router.navigate(['speakers']);
  }

  goCredential() {
    this.router.navigate(['credential']);
  }

  goOrganizers() {
    this.router.navigate(['organizers']);
  }

  goHotels() {
    this.router.navigate(['hotels']);
  }

  goRestaurant() {
    this.router.navigate(['restaurant']);
  }

  goActivities() {
    this.router.navigate(['activities']);
  }
}
