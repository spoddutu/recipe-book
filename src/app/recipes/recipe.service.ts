import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	  recipeSelected = new EventEmitter<Recipe>();
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

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addToShppingList(ingredients: Ingredient[]){
      this.shoppingListService.addIngredients(ingredients);
    }


}