import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[]= [
    new Recipe('Butter Chicken','Its made with butter and chicken','https://www.simplyrecipes.com/thmb/8-J-b01HNXJ0huHmlzgqqefVyGQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-5-de97119a16124a31a3b99ee16a398612.jpg'),
    new Recipe('Butter Chicken','Its made with butter and chicken','https://www.simplyrecipes.com/thmb/8-J-b01HNXJ0huHmlzgqqefVyGQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-5-de97119a16124a31a3b99ee16a398612.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
