import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredentialPageRoutingModule } from './credential-routing.module';

import { CredentialPage } from './credential.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    CredentialPageRoutingModule
  ],
  declarations: [CredentialPage]
})
export class CredentialPageModule {}
