import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() resultPokemons: any[] = [];

  pokemons: any[] = [];

  constructor(private service: PokeapiService,
              private router: Router) {

              }

  ngOnInit() {
    this.service.getAllPokemon().subscribe( (resp: any[]) => {
      this.pokemons = resp;
    });
  }

  private getUrlId(url: string) {
    const key = '/pokemon';
    let startIndex = url.indexOf(key) + key.length + 1;

    return url.substring(startIndex, url.length - 1);
  }

  getPokemon(pokemonUrl: string) {
    let pokemonId = this.getUrlId(pokemonUrl);

    this.router.navigate(['pokemon', pokemonId]);
  }

  searchPokemon(searchValue: string) {
      this.service.getAllPokemon().subscribe( (resp: any[]) => {
        this.pokemons = resp.filter(x => x.name.includes(searchValue));
      });
  }

}
