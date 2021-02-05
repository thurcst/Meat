import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { HttpModule } from "@angular/http";

import { ShoppingCartComponent } from "./restaurant-detail/shopping-cart/shopping-cart.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuItemComponent } from "./restaurant-detail/menu-item/menu-item.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    RestaurantDetailComponent,
    OrderSummaryComponent,
    ShoppingCartComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuItemComponent,
    ReviewsComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    SharedModule.andProviders(),
    BrowserModule,
    HttpModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
