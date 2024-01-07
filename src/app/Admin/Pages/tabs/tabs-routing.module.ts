import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
        {
          path: 'add-get-delete-categorie',
          loadChildren: () => import('../GestionDesCategories/get-delete-categorie/add-get-delete-categorie.module').then( m => m.AddGetDeleteCategoriePageModule)
        },

        {
          path: 'question',
          loadChildren: () => import('../question/question.module').then( m => m.QuestionPageModule)
        },

        { path: '', redirectTo: '/tabs/add-get-delete-categorie', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
