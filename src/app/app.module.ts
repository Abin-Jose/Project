import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';

import { CommonService } from './service/common.service';
import { FilterPipe } from './filter/filter.pipe';
import { DatePipe } from './filter/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FilterPipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
