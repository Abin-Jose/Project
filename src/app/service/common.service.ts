import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  
  // public page : number;

  constructor(private http:Http) { 
    console.log("service called");
  }

  getMovies(page){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=&language=en-US&primary_release_year=2017&page='+page).map(res=>res.json());
  }

  getConfig(){
    return this.http.get('https://api.themoviedb.org/3/configuration?api_key=').map(res=>res.json());
  }

  getGenre(){
     return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=&language=en-US').map(res=>res.json());
  }

  getTvshows(){
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false').map(res=>res.json());
  }
}
