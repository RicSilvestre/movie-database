import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './atoms/title/title.component';
import { PosterComponent } from './atoms/poster/poster.component';
import { TextComponent } from './atoms/text/text.component';
import { StarComponent } from './atoms/star/star.component';
import { InputComponent } from './atoms/input/input.component';
import { TitleWTextComponent } from './molecules/title-w-text/title-w-text.component';
import { SearchBarComponent } from './molecules/search-bar/search-bar.component';
import { SubtitleWElementComponent } from './molecules/subtitle-w-element/subtitle-w-element.component';
import { HeaderComponent } from './molecules/header/header.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { MovieBlockComponent } from './organisms/movie-block/movie-block.component';
import { MainLayoutComponent } from './templates/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeartComponent } from './atoms/heart/heart.component';
import { FavoriteButtonComponent } from './molecules/favorite-button/favorite-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PosterComponent,
    TextComponent,
    StarComponent,
    InputComponent,
    TitleWTextComponent,
    SearchBarComponent,
    SubtitleWElementComponent,
    HeaderComponent,
    FooterComponent,
    MovieBlockComponent,
    MainLayoutComponent,
    HomeComponent,
    HeartComponent,
    FavoriteButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
