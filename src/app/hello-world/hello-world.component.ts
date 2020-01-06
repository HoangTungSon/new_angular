import { Component, OnInit } from '@angular/core';
import { IHello } from '../hello';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {


  hellos: IHello[];

  constructor(private helloService: HelloService) { }

  ngOnInit() {
    console.log('something running');
    this.helloService.getItems(10).subscribe(next => {
      this.hellos = next;
      console.log('success to get items');
    }, error => {
      console.log('fail to get items')
    })
  }
}
