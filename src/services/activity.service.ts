import { Injectable } from '@angular/core';
import { CustomHttpService } from '../providers/api/custom-http.service';
import { appConfig as APP } from '../app/app.config';
import {Activity} from '../models/activity.model';

@Injectable({
    providedIn: 'root',
})
export class ActivityService {
    constructor(private customHttpService: CustomHttpService) {}

    public getAllActivities() {
        return this.customHttpService.get(APP.endpoints.activities).then((data) => {
            return  data.activities.map((activity) => new Activity(activity));
        });
    }
}
