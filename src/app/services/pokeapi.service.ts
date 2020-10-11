import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getAllPokemon() {
    return this.http.get(`${this.baseUrl}/pokemon?limit=151`)
                    .pipe(
                      map( data => data['results'])
                    );
  }

  getPokemon(id: string){
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }

  getSpecie(idEspecie: number){
    return this.http.get(`${this.baseUrl}/pokemon-species/${idEspecie}`);
  }

  getEvolutionChain(id: number){
    return this.http.get(`${this.baseUrl}/evolution-chain/${id}`)
                    .pipe(
                      map( resp => resp['chain'])
                    );
  }
}
