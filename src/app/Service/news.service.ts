import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  
  api_key="ec51b44e31794f0bb33c4da05be55c90"

  constructor( private http :HttpClient) { }
  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key)
  }
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=' + this.api_key);
  }
  getArticleByid(source:string){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key)

  }
  getSports(){
    return this.http.get('https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=' + this.api_key)
  }

  getEntertainment(){
    return this.http.get('https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=' + this.api_key)
  }

  getBuisness(){
    return this.http.get('https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=' + this.api_key)
  }
}
