import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  constructor(private http: HttpClient) { }

  getFlightData(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data/flight_data.json');
  }
}
