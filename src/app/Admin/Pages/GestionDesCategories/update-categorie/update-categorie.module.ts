import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCategoriePageRoutingModule } from './update-categorie-routing.module';

import { UpdateCategoriePage } from './update-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCategoriePageRoutingModule
  ],
  declarations: [UpdateCategoriePage]
})
export class UpdateCategoriePageModule {}
