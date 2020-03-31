import { Injectable } from '@angular/core';
import { CustomHttpService } from '../providers/api/custom-http.service';
import { appConfig as APP } from '../app/app.config';
import {Speaker} from '../models/speaker.model';
import {Organizer} from "../models/organizer.model";

@Injectable({
    providedIn: 'root',
})
export class OrganizerService {
    constructor(private customHttpService: CustomHttpService) {}

    public getAllOrganizers() {
        return this.customHttpService.get(APP.endpoints.organizers).then((data) => {
            return  data.organizers.map((organizer) => new Organizer(organizer));
        });
    }
}
