import { Component, inject, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { TagsComponent } from "../tags/tags.component";
import { NotFoundComponent } from "../not-found/not-found.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, SearchComponent, TagsComponent, RouterLink, NotFoundComponent],
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
        this.foods = this.foodService.getAllFoodBySearchTerm(params['searchTerm']);
      }
      else if (params['tag']) {
        this.foods = this.foodService.getFoodsByTagName(params['tag']);
      }
      else this.foods = this.foodService.getAll();
    })
  }
}
