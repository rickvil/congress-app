import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakersPageRoutingModule } from './speakers-routing.module';

import { SpeakersPage } from './speakers.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    SpeakersPageRoutingModule
  ],
  declarations: [SpeakersPage]
})
export class SpeakersPageModule {}
