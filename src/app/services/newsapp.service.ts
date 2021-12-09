import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsappService {

  constructor(private _http: HttpClient) { }

  apiKey = "&apiKey=a4bb5c40923b4e87814fbc54dbf2f6a4";
  topNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in";
  techNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&";
  topHeading():Observable<any> {
    return this._http.get(this.topNewsApiUrl + this.apiKey);
  }

  topTechNews(category:string):Observable<any> {
    return this._http.get(this.techNewsApiUrl + category + this.apiKey);
  }
}
