import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
private recipes: Recipe[]=[
  new Recipe('Test Recipe','Test Description','https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastapenne.jpg'),
    new Recipe('Another Test Recipe','Another Test Description','https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastapenne.jpg'),
];
getRecipes(){
  return this.recipes.slice();
}
}