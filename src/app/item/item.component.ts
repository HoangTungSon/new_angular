import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { IHello } from '../hello';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: IHello;

  constructor(
    private helloService: HelloService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getItemById(id);
  }

  getItemById(id: number) {
    this.helloService.getItemById(id).subscribe(next => {
      this.item = next;
      console.log('success to get item ' + next.order);
    }, error => {
      console.log('fail to get item');
    });
  }

}
