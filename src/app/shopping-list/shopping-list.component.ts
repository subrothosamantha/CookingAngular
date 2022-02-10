import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[]= [
    new Ingredient("chicken",100),
    new Ingredient("mutton",100)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
