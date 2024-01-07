import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGetDeleteCategoriePage } from './add-get-delete-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: AddGetDeleteCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGetDeleteCategoriePageRoutingModule {}
