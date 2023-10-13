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

  submit(data:any){
    console.log(data);
  }

  ngOnInit(){

  }
}
