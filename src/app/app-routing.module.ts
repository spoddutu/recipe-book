import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { CanDeactivateGaurd } from './shared/deactivate-gaurd.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule'},
  { path: 'shopping-list', component: ShoppingListComponent, canDeactivate: [CanDeactivateGaurd]}
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule{}