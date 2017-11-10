import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
  			new Recipe('New Recipe', 'Added just today', 'http://images.indianexpress.com/2015/05/macaroni-main.jpg')
  		];

  	getRecipes() {
  		return this.recipes.slice();
  	}


}