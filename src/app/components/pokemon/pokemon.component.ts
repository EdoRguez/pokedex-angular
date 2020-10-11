import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  tabPanel = 1;
  pokemon: any = [];
  evolutionChain: string[] = [];
  loadingChain = true;
  loadingMain = true;

  constructor(private service: PokeapiService,
              private route: ActivatedRoute,
              private router: Router) {

    this.loadingMain = true;

    this.route.params.subscribe( params => {
      this.service.getPokemon(params['id']).subscribe( (res:any) => {
        this.pokemon = res;
        this.loadingMain = false;
      });
    });

  }

  ngOnInit() {
  }

  changePanel(idPanel: number) {
    this.tabPanel = idPanel;
  }

  getEvolutionFromSpecie(specieUrl: string) {

    if (this.evolutionChain.length === 0) {

        var idSpecie = this.getSpecieIdFromUrl(specieUrl);

        this.service.getSpecie(idSpecie).subscribe( (res: any) => {

          var idChain = this.getChainIdFromUrl(res.evolution_chain.url);

          this.service.getEvolutionChain(idChain).subscribe( (res: any[]) => {
            this.getChainNames(res);
            this.loadingChain = false;
          });
        });
    }
  }

  getPokemon(name: string) {

    if (name !== this.pokemon.name) {
      this.loadingMain = true;
      this.tabPanel = 1;
      this.router.navigate(['pokemon', name]);
    }
  }

  private getSpecieIdFromUrl(url: string){
    // https://pokeapi.co/api/v2/pokemon-species/5/
    var key = 'species';
    var startIndex = url.indexOf(key) + key.length + 1;

    return Number(url.substring(startIndex, url.length - 1));

  }

  private getChainIdFromUrl(url: string){
    // https://pokeapi.co/api/v2/evolution-chain/2/
    var key = 'chain';
    var startIndex = url.indexOf(key) + key.length + 1;

    return Number(url.substring(startIndex, url.length - 1));

  }

  private getChainNames(chainObject: any){

    this.evolutionChain.push(chainObject.species.name);

    if(chainObject.evolves_to.length > 0){
      this.getChainNames(chainObject.evolves_to[0]);
    }
  }

}
