import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { CanComponentDeactivate } from '../shared/deactivate-gaurd.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  ingredients: Ingredient[] = [];
  ingerdientsSub: Subscription;
  formChangedSub: Subscription;	
  saveChanges: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  	this.ingredients = this.shoppingListService.getIngredient();
  	this.ingerdientsSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
    this.formChangedSub = this.shoppingListService.formChanged.subscribe((data: boolean) => this.saveChanges = data);
  }

  editItem(index: number){
    this.shoppingListService.editItem.next(index);
  }

  ngOnDestroy(){
  	this.ingerdientsSub.unsubscribe();
    this.formChangedSub.unsubscribe();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.saveChanges){
      return true;
    }
    return confirm('Do you want to discard the changes');
  }

}
