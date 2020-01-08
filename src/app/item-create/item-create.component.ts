import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { IItem } from '../IItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  createItem(item: IItem) {
    this.itemService.createItem(item).subscribe(next => {
      console.log('success to create new item');
      this.router.navigateByUrl('/');
    }, error => {
      console.log('fail to create new item');
    })
  }


}
