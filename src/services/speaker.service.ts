import { Injectable } from '@angular/core';
import { CustomHttpService } from '../providers/api/custom-http.service';
import { appConfig as APP } from '../app/app.config';
import {Speaker} from '../models/speaker.model';

@Injectable({
    providedIn: 'root',
})
export class SpeakerService {
    constructor(private customHttpService: CustomHttpService) {}

    public getAllSpeakers() {
        return this.customHttpService.get(APP.endpoints.speakers).then((data) => {
            return  data.speakers.map((speaker) => new Speaker(speaker));
        });
    }
}
