import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

  constructor(private http:Http) { 
    console.log("service called");
  }

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=key&language=en-US&primary_release_year=2017').map(res=>res.json());
  }

  getConfig(){
    return this.http.get('https://api.themoviedb.org/3/configuration?api_key=key').map(res=>res.json());
  }

  getGenre(){
     return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=key&language=en-US').map(res=>res.json());
  }
}
