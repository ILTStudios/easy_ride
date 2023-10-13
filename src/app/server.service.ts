import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private api_url = 'ws://localhost:3000';
  private socket$: WebSocketSubject<any>;

  constructor() { 
    this.socket$ = webSocket(this.api_url);
  }

  sendMessage(message: string): void{
    this.socket$.next(message);
  }

  receiveMessage(){
    return this.socket$.asObservable();
  }
}