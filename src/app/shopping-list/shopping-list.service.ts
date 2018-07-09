
// import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredientAdded = new Subject<Ingredient[]>();
    private ingredients = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10),
        new Ingredient('Bananas', 3)
      ]

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientAdded.emit(this.ingredients.slice());
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let i of ingredients) {
        //     this.addIngredient(i)
        // }
        // the approach above is still viable but that would emit the event many times

        this.ingredients.push(...ingredients);
        // this.ingredientAdded.emit(this.ingredients.slice());
        this.ingredientAdded.next(this.ingredients.slice());
    }
}