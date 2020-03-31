import { Injectable } from '@angular/core';
import { CustomHttpService } from '../providers/api/custom-http.service';
import { appConfig as APP } from '../app/app.config';
import {Hotel} from '../models/hotel.model';

@Injectable({
    providedIn: 'root',
})
export class HotelService {
    constructor(private customHttpService: CustomHttpService) {}

    public getAllHotels() {
        return this.customHttpService.get(APP.endpoints.hotels).then((data) => {
            return  data.hotels.map((hotel) => new Hotel(hotel));
        });
    }
}
