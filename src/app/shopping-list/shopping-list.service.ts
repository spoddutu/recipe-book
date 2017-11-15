import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	private ingredients: Ingredient[] = [
	    new Ingredient('Apples', 5),
	    new Ingredient('Tomatos', 10)
	  ];
	ingredientsChanged = new Subject<Ingredient[]>();
	editItem = new Subject<number>();

	getIngredient(){
		return this.ingredients.slice();
	}

	get(index: number){
		return this.ingredients[index];
	}

	add(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	update(index: number, ingredient: Ingredient) {
		this.ingredients[index] = ingredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	delete(index: number) {
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}