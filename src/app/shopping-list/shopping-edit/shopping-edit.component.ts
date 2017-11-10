import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElemRef: ElementRef;
  @ViewChild('amountInput') amountElemRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  newIngredientAdded(){
  	this.shoppingListService.add({name: this.nameElemRef.nativeElement.value, amount: this.amountElemRef.nativeElement.value});
  }
}
