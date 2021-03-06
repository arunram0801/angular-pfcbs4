import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

export class ShoppingListService{
ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[]=[
    new Ingredient("Tomato",10),
    new Ingredient("Onion",150)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}