import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { AuthGuard } from './auth/auth-guard.service';
import { CanDeactivateGaurd } from './shared/deactivate-gaurd.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children:[
    { path: '', component: RecipeStartComponent},
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGaurd]},
  	{ path: ':id', component: RecipeDetailComponent},
  	{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGaurd]}
  ]},
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule{}