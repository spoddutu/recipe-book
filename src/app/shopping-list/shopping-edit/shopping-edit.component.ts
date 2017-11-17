import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

import { CanComponentDeactivate } from '../../shared/deactivate-gaurd.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  @ViewChild('shoppingListForm') shoppingListFormRef: NgForm;
  editItemSub: Subscription;
  editMode: boolean = false;
  editedIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editItemSub = this.shoppingListService.editItem.subscribe((index: number) => {
      this.editMode = true;
      this.editedIndex = index;
      let ingredient = this.shoppingListService.get(index);
      this.shoppingListFormRef.setValue({
        'name': ingredient.name,
        'amount': ingredient.amount
      });
    });
  }

  onSubmit(){
    let item = this.shoppingListFormRef.value;
    let ingredient = new Ingredient(item.name, item.amount);
    if(this.editMode){
      this.shoppingListService.update(this.editedIndex, ingredient);
    }
    else{
      this.shoppingListService.add(ingredient);
    }
    this.doClear();
  }

  doDelete(){
    this.shoppingListService.delete(this.editedIndex);
    this.doClear();
  }

  doClear(){
    this.editMode = false;
    this.shoppingListFormRef.reset();
  }

  ngOnDestroy(){
    this.editItemSub.unsubscribe();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.anyChanges()){
      return confirm('Do you want to discard the changes');
    }
    return true;
  }

  private anyChanges(): boolean {
    let controls = this.shoppingListFormRef.controls;
    for(let key  of Object.keys(controls)){
      if(controls[key].dirty) {
        return true;
      }
    }
    return false;
  }
}
