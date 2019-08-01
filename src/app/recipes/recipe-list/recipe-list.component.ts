import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A test Recipe",
      "Description recipe",
      "https://www.chatelaine.com/wp-content/uploads/2017/05/Modern-tuna-cobb-salad-feature-550x550.jpg"
    ),
    new Recipe(
      "Another test Recipe",
      "Description another test recipe",
      "https://www.chatelaine.com/wp-content/uploads/2019/07/MEDITERRANEAN-DIET-Broiled-Salmon-Nic%CC%A7oise-Salad-800x800.jpg"
    )
  ];

  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  ngOnInit() {}
}
