import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonUrlId'
})
export class PokemonUrlIdPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return '';
    }

    const key = '/pokemon';
    let startIndex = value.indexOf(key) + key.length + 1;

    return value.substring(startIndex, value.length - 1);
  }

}
