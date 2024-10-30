import { Component, inject, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // private foodService = inject(FoodService);

  foods: Food[] = []
  constructor(private foodService: FoodService) {

  }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
    console.log(this.foods)
  }


}
