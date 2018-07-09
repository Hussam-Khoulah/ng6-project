import { 
    // EventEmitter, 
    Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'test recipe 1', 
            'test recipe 1 description', 
            'http://normalcooking.files.wordpress.com/2013/04/salmon-florentine-with-roasted-red-peppers-2.jpg',
            [
                new Ingredient('bread', 1),
                new Ingredient('Onion', 1/2)
            ]),
        new Recipe(
            'test recipe 2', 
            'test recipe 2 description', 
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
            [
                new Ingredient('honey', 1),
                new Ingredient('Banana', 2)
            ])
      ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice(); // so to get a copy of the recipe list not a reference
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}