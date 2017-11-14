import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListForm') shoppingListFormRef: NgForm;
  editItemSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editItemSub = this.shoppingListService.editItem.subscribe((index: number) => {
      let ingredient = this.shoppingListService.get(index);
      console.log(ingredient);
    });
  }

  onSubmit(){
    console.log(this.shoppingListFormRef);
    let item = this.shoppingListFormRef.value;
    this.shoppingListService.add({name: item.name, amount: item.amount});
    this.shoppingListFormRef.reset();
  }

  ngOnDestroy(){
    this.editItemSub.unsubscribe();
  }
}
