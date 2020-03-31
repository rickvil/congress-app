import { Component, OnInit } from '@angular/core';
import {SpeakerService} from '../../services/speaker.service';
import {Speaker} from '../../models/speaker.model';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public speakers: Array<Speaker>;

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    this.speakerService.getAllSpeakers().then((speakers) => {
      this.speakers = speakers;
    });
  }
}
