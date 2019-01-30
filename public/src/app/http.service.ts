import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }

  allGames(){
    return this._http.get('/allGames')
  }

  newGame(obj){
    return this._http.post('/newGame', obj)
  }

}
