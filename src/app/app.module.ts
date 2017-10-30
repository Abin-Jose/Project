import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { NgIf } from '@angular/common';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';

import { CommonService } from './service/common.service';
import { FilterPipe } from './filter/filter.pipe';
import { DatePipe } from './filter/date.pipe';
import { LimitPipe } from './filter/limit.pipe';
import { SerialComponent } from './components/serial/serial.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FilterPipe,
    DatePipe,
    LimitPipe,
    SerialComponent
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
