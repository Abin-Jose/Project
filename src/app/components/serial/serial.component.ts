import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {

  public serial:any=[];
  public images:any;
  public postersize:any;

  constructor(private service:CommonService) {console.log("serial component called") }

  ngOnInit() {
    this.service.getConfig().subscribe((config)=>{
      this.images = config.images; 
      this.postersize = config.images.poster_sizes[3];
    });
    this.service.getTvshows().subscribe((serials)=>{
      this.serial = serials; 
    });
    
  }

}
