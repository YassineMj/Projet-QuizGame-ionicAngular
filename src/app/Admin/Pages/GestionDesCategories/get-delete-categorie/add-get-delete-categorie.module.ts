import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGetDeleteCategoriePageRoutingModule } from './add-get-delete-categorie-routing.module';

import { AddGetDeleteCategoriePage } from './add-get-delete-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGetDeleteCategoriePageRoutingModule
  ],
  declarations: [AddGetDeleteCategoriePage]
})
export class AddGetDeleteCategoriePageModule {}
