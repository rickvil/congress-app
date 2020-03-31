import { Component, OnInit } from '@angular/core';
import {Activity} from '../../models/activity.model';
import {ActivityService} from '../../services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  public activities: Array<Activity>;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getAllActivities().then((activities) => {
      this.activities = activities;
    });
  }
}
