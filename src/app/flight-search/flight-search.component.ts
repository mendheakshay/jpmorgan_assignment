import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FlightModel } from '../interfaces/flight-modal';
import { FlightSearchService } from '../services/flight-search.service';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  flightData: Array<FlightModel> = [];
  flightSearchFlag: boolean = true;
  flightDetailsFlag: boolean = false;

  originCityList: Array<string> = [];
  destinationCityList: Array<string> = [];
  flightclassList: Array<string> = [];
  displayDuplicateError: Boolean = false;

  filteredArray: Array<FlightModel> = [];

  flightSearchForm = this.fb.group({
    departure: ['', Validators.required],
    destination: ['', Validators.required],
    departDate: ['', Validators.required],
    returnDate: ['', Validators.required],
    traveller: ['', Validators.required],
    class: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private flightSearchService: FlightSearchService) { }

  ngOnInit(): void {
    this.originCityList = ["MUMBAI", 'PUNE', 'BLR'];
    this.destinationCityList = ["MUMBAI", 'PUNE', 'BLR'];
    this.flightclassList = ['Economy', 'Business'];
  }

  onSubmit() {
    if (this.flightSearchForm.value.departure == this.flightSearchForm.value.destination) {
      this.displayDuplicateError = true;
    }
    else {
      this.flightSearchFlag = false;
      this.flightDetailsFlag = true;
      this.flightSearchService.getFlightData().subscribe((data) => {
        this.flightData = data;
        this.filteredArray = this.flightData.filter(item => {
          return (item.OriginDestination.Origin === this.flightSearchForm.value.departure)
            && (item.SeatsAvailable > this.flightSearchForm.value.traveller)
            && (item.OriginDestination.Destination === this.flightSearchForm.value.destination)
            && (item.class === this.flightSearchForm.value.class);
        });
      });
    }
  }
}

