import { Component, OnInit } from '@angular/core';
import { IItem } from '../IItem';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  items: IItem[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    console.log('something running');
    this.itemService.getItems(10).subscribe(next => {
      this.items = next;
      console.log('success to get items');
    }, error => {
      console.log('fail to get items')
    })
  }
}
