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
      console.log('Received data in Angular:', message);
      this.data = message;
    });

    this.sendmessage();
  }

  sendmessage(){
    this.web_socket.sendMessage('Hello Serber OwO UwU');
  }
}
