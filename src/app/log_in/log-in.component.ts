import { Component } from '@angular/core';
import { ServerService } from '../server.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(private api:ServerService){

  }
  ngOnInit(){
    this.api.api_call().subscribe((data) => {
      console.log(data);
    })
  }
}
