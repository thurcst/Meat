import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { RatingComponent } from "./rating/rating.component";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { CommonModule } from "@angular/common";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants.service";
import { OrderService } from "app/order/order.service";

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  static andProviders(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantsService, OrderService],
    };
  }
}
