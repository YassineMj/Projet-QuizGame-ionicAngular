import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'categorie',
    loadChildren: () => import('./Utilisateur/Pages/categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'question/:categoryId',
    loadChildren: () => import('./Utilisateur/Pages/question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./Admin/Pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  // {
  //   path: 'add-get-delete-categorie',
  //   loadChildren: () => import('./Admin/Pages/GestionDesCategories/add-get-delete-categorie/add-get-delete-categorie.module').then( m => m.AddGetDeleteCategoriePageModule)
  // },
  {
    path: 'update-categorie/:categoryId',
    loadChildren: () => import('./Admin/Pages/GestionDesCategories/update-categorie/update-categorie.module').then( m => m.UpdateCategoriePageModule)
  },
  // {
  //   path: 'question',
  //   loadChildren: () => import('./Admin/Pages/question/question.module').then( m => m.QuestionPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./Admin/Pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
