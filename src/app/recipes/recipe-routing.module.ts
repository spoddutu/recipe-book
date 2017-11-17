import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { AuthGuard } from '../auth/auth-guard.service';
import { CanDeactivateGaurd } from '../shared/deactivate-gaurd.service';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children:[
    { path: '', component: RecipeStartComponent},
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGaurd]},
  	{ path: ':id', component: RecipeDetailComponent},
  	{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGaurd]}
  ]}
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forChild(appRoutes) ],
	exports: [ RouterModule ]
})
export class RecipeRoutingModule{}