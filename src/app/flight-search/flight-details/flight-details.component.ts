import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  @Input() flightSearchData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
