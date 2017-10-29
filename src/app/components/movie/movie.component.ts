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

  constructor(private service:CommonService) {
    
   }

  ngOnInit() {
    this.getValues();
    this.service.getConfig().subscribe((config)=>{
      this.images = config.images; 
      this.postersize = config.images.poster_sizes[3];
     // console.log(this.postersize);
    });
  }
  
  getValues(){
    this.service.getMovies().subscribe((movies)=>{
      this.genreContent = this.getGenre();
      //this.genreContent.forEach(element => {
        console.log(this.genreContent);
      //});
      this.movie = movies; 
    });
  }

  getGenre(){
    this.service.getGenre().subscribe((genre)=>{
      return genre.genres;
    });
  }

}

interface movies{
  results:any;
}

interface config{
  images:any;
}
