import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  
  public movie:any;
  public images : any;
  public postersize:any;
  public genreContent:any;
  public page : number = 1;
  public show : boolean = false;
  public showTvshows : boolean = false;
  public showMovie : boolean = true;
 

  constructor(private service:CommonService) {
    
   }

  ngOnInit() {
    this.getValues(this.page);
    this.getGenre();
    this.service.getConfig().subscribe((config)=>{
      this.images = config.images; 
      this.postersize = config.images.poster_sizes[3];
    });
  }
  
  getValues(val){
    this.service.getMovies(val).subscribe((movies)=>{
      this.movie = movies; 
    });
  }

  getGenre(){
    this.service.getGenre().subscribe((genre)=>{
      this.genreContent = genre.genres;
    });
  }

  changePage(type){
    if(type == 'nxt'){
      this.page = this.page + 1;
      this.getValues(this.page);
      this.show = this.page>1?true:false;
    }
    else{
      this.page = this.page - 1;
      this.getValues(this.page);
      this.show = this.page>1?true:false;
    }
  }

  Tvshows(){
    this.showTvshows = true;
    this.showMovie = false;
  }
  MovieShows(){
    this.showTvshows = false;
    this.showMovie = true;
  }

}

interface movies{
  results:any;
}

interface config{
  images:any;
}
