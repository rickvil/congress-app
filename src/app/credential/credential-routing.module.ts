import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredentialPage } from './credential.page';

const routes: Routes = [
  {
    path: '',
    component: CredentialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialPageRoutingModule {}
