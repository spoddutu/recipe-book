import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	  recipeListChanged = new Subject<Recipe[]>();

	  private recipes: Recipe[] = [
  			new Recipe( 'New Recipe', 
  						'Added just today', 
  						'http://images.indianexpress.com/2015/05/macaroni-main.jpg',
  						[
  						  new Ingredient('pasta', 1), 
  						  new Ingredient('cheese', 1)
  						])
  		];

    constructor(private shoppingListService: ShoppingListService){}

  	getRecipes() {
  		return this.recipes.slice();
  	}

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipeListChanged.next(this.getRecipes());
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipeListChanged.next(this.getRecipes());
    }

    updateRecipe(index: number, recipe: Recipe){
      this.recipes[index] = recipe;
      this.recipeListChanged.next(this.getRecipes());
    }

    deleteRecipe(index: number){
      this.recipes.splice(index, 1);
      this.recipeListChanged.next(this.getRecipes());
    }

    addToShppingList(ingredients: Ingredient[]){
      this.shoppingListService.addIngredients(ingredients);
    }
}