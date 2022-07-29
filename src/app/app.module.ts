import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
   
import { AppComponent } from './app.component';
   
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VideolistComponent } from './videolist/videolist.component';


   
@NgModule({
  declarations: [
    AppComponent,
    VideolistComponent,
 
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }