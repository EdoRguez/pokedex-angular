import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { PokemonImagePipe } from './pipes/pokemon-image.pipe';
import { FirstLetterUpperPipe } from './pipes/first-letter-upper.pipe';
import { PokemonUrlIdPipe } from './pipes/pokemon-url-id.pipe';

// Services
import { PokeapiService } from './services/pokeapi.service';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PokemonImagePipe,
    FirstLetterUpperPipe,
    PokemonUrlIdPipe,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
