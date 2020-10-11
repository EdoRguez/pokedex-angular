import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImage'
})
export class PokemonImagePipe implements PipeTransform {

  transform(value: string): string {

    if (!value) {
      return '';
    }

    return `assets/img/${value}.jpg`;
  }

}
