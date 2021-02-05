import { Restaurant } from "./restaurants/restaurant/restaurant.model";
import { MenuItem } from "./restaurant-detail/menu-item/menu-item.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { MEAT_API } from "../app.api";
import { Http } from "@angular/http";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map((response) => response.json());
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map((response) => response.json());
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map((response) => response.json());
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/menu`)
      .map((response) => response.json());
  }
}