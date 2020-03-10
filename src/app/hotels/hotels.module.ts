import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelsPageRoutingModule } from './hotels-routing.module';

import { HotelsPage } from './hotels.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    HotelsPageRoutingModule
  ],
  declarations: [HotelsPage]
})
export class HotelsPageModule {}
