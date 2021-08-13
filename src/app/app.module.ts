import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayerComponent } from './components/player/player.component';
import { ArtistsPageComponent } from './pages/artist-page/artist-page.component';
import { SongItemComponent } from './components/song-item/song-item.component';
import { ItemsSliderComponent } from './components/items-slider/items-slider.component';
import { PlayerControllDirective } from './components/player/directives/player-control.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    PlayerComponent,
    ArtistsPageComponent,
    SongItemComponent,
    ItemsSliderComponent,
    PlayerControllDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
