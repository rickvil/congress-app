import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant.model';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  public restaurants: Array<Restaurant>;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().then((restaurants) => {
      this.restaurants = restaurants;
    });
  }
}
