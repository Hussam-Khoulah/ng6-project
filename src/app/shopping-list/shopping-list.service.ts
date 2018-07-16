
// import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients = [
        new Ingredient('Apples', 5),
      new Ingredient('Peaches', 3),
      new Ingredient('Appricots', 6),
      new Ingredient('Grapes', 9),
        new Ingredient('Bananas', 3)
      ]

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientAdded.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index: number) {
      return this.ingredients[index];
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let i of ingredients) {
        //     this.addIngredient(i)
        // }
        // the approach above is still viable but that would emit the event many times

        this.ingredients.push(...ingredients);
        // this.ingredientAdded.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
