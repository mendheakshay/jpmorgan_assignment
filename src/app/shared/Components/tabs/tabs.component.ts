import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() tabItems: any;
  @Output() selectedItem = new EventEmitter();
  activeItem: any;

  constructor() { }

  ngOnInit(): void {
    this.activeItem = 0;
    this.selectedItem.emit(this.tabItems[0]);
  }

  toggleTabView(tabItem: any, tabIndex: number) {
    this.activeItem = tabIndex;
    this.selectedItem.emit(tabItem);
  }

}
