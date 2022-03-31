import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTabItem: any;
  items: any = ['Flight', 'Hotel', 'Car', 'Activity'];

  onselectItem(data: any) {
    this.selectedTabItem = data;
  }
}
