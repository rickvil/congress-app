import { Injectable } from '@angular/core';
import { CustomHttpService } from '../providers/api/custom-http.service';
import { appConfig as APP } from '../app/app.config';
import {Restaurant} from '../models/restaurant.model';

@Injectable({
    providedIn: 'root',
})
export class RestaurantService {
    constructor(private customHttpService: CustomHttpService) {}

    public getAllRestaurants() {
        return this.customHttpService.get(APP.endpoints.restaurants).then((data) => {
            return  data.restaurants.map((restaurant) => new Restaurant(restaurant));
        });
    }
}
