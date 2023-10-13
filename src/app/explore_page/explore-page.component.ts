import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit {
  data: any;
  constructor(private web_socket: ServerService) {}

  ngOnInit(): void {
    this.web_socket.receiveMessage().subscribe((message) => {
      this.data = message;
    });

    console.log(this.data);

    this.sendmessage();
  }

  sendmessage(){
    this.web_socket.sendMessage('Hello Serber OwO UwU');
  }
}
