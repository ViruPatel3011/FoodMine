import { Component, inject, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // private foodService = inject(FoodService);

  foods: Food[] = []
  constructor(private foodService: FoodService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase()
          .includes(params['searchTerm'].toLowerCase()))
      }
      else this.foods = this.foodService.getAll();
    })
  }
}
