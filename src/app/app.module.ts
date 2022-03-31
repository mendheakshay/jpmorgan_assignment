import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { ActivitySearchComponent } from './activity-search/activity-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './shared/Components/tabs/tabs.component';
import { FlightDetailsComponent } from './flight-search/flight-details/flight-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    TabsComponent,
    HotelSearchComponent,
    CarSearchComponent,
    ActivitySearchComponent,
    FlightDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
