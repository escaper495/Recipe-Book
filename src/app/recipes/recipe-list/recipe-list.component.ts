import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Pizza","Cheese burst pizza","https://www.maxpixel.net/static/photo/1x/Big-City-Pizza-2530144.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
