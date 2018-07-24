import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { foodItem } from './food.interface';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foodList: Array<Object> = [];
  todayFood: Array<foodItem> = [];
  foodItem: Object = {};
  toggleAddItem: boolean = false;
  caloriesConsumed: number = 0;

  ngOnInit() {
    this.foodList = foods;
  }

  toggleAdding() {
    this.toggleAddItem = !this.toggleAddItem;
  }

  addTodayFood(item: foodItem) {
    if (this.todayFood.indexOf(item) != -1) {
      this.todayFood[this.todayFood.indexOf(item)].quantity++;
    } else {
      item.quantity=1;
      this.todayFood.push(item);
    }
    this.caloriesConsumed += item.quantity * item.calories;
  }

  addItem() {
    this.foodList.push(this.foodItem);
    this.foodItem = {}
    this.toggleAdding();
  }
}
