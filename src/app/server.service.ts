import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private http:HttpClient
  ) { }

  api_call(){
    return this.http.get(window.location.href);
  }
}