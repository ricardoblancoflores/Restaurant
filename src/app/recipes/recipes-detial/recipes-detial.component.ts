import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-detial',
  templateUrl: './recipes-detial.component.html',
  styleUrls: ['./recipes-detial.component.css']
})
export class RecipesDetialComponent implements OnInit {
 @Input() recipe:Recipe;
  constructor() { }
 
  ngOnInit() {
  }

}
