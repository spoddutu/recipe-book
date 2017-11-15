import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  canEdit = false;
  recipeForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
  	this.route.params.subscribe((params: Params) => {
  		this.id = +params['id'];
  		this.canEdit = params['id'] != null;
      this.initForm();
  	});
  }

  private initForm() {
    let name = '';
    let imagePath = '';
    let description = '';
    let ingredients = new FormArray([]);

    if(this.canEdit){
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe['ingredients']){
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onSubmit(){
    let value = this.recipeForm.value;
    if(this.canEdit){
      this.recipeService.updateRecipe(this.id, value);
    }
    else{
      this.recipeService.addRecipe(value);
    }

    this.recipeForm.reset();
    this.canEdit = false;
    this.router.navigate(["../"], {relativeTo: this.route});
  }

  doCancel(){
    this.router.navigate(["../"], {relativeTo: this.route});
  }

  deleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
