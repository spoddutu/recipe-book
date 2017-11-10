import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	private ingredients: Ingredient[] = [
	    new Ingredient('Apples', 5),
	    new Ingredient('Tomatos', 10)
	  ];
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	getIngredient(){
		return this.ingredients.slice();
	}

	add(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}