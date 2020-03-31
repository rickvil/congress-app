import { Component, OnInit } from '@angular/core';
import {Hotel} from '../../models/hotel.model';
import {HotelService} from '../../services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  public hotels: Array<Hotel>;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getAllHotels().then((hotels) => {
      this.hotels = hotels;
    });
  }
}
