import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizersPage } from './organizers.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizersPageRoutingModule {}
