import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AuthService } from '../auth/auth.service';

import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

	constructor(private http: Http, private recipeService: RecipeService, private shoppingListService: ShoppingListService, private authService: AuthService){}

    saveRecipes() {
        let token = this.authService.getToken();
    	return this.http.put('https://recipe-book-cb3c6.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        let token = this.authService.getToken();
    	this.http.get('https://recipe-book-cb3c6.firebaseio.com/recipes.json?auth=' + token).subscribe((response: Response) => {
    		let recipes: Recipe[] = response.json();
    		this.recipeService.setRecipes(recipes);
    	});
    }
}