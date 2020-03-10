import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredentialPageRoutingModule } from './credential-routing.module';

import { CredentialPage } from './credential.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredentialPageRoutingModule
  ],
  declarations: [CredentialPage]
})
export class CredentialPageModule {}
