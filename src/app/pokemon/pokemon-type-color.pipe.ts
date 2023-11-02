import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string = '';
    switch (type) {
      case 'Feu':
        color = 'bg-red-500 text-white';
        break;
      case 'Eau':
        color = 'bg-blue-500 text-white';
        break;
      case 'Plante':
        color = 'bg-green-500 text-white';
        break;
      case 'Insecte':
        color = 'bg-green-300 text-white';
        break;
      case 'Normal':
        color = 'bg-gray-300 text-gray-700';
        break;
      case 'Vol':
        color = 'bg-indigo-500 text-white';
        break;
      case 'Poison':
        color = 'bg-purple-500 text-white';
        break;
      case 'Fée':
        color = 'bg-pink-300 text-white';
        break;
      case 'Psy':
        color = 'bg-pink-500 text-white';
        break;
      case 'Electrik':
        color = 'bg-yellow-500 text-white';
        break;
      case 'Combat':
        color = 'bg-yellow-900 text-white';
        break;
      case 'Sol':
        color = 'bg-yellow-300 text-white';
        break;
      case 'Roche':
        color = 'bg-gray-500 text-white';
        break;
      case 'Dragon':
        color = 'bg-indigo-900 text-white';
        break;
      case 'Spectre':
        color = 'bg-indigo-300 text-white';
        break;
      case 'Ténèbres':
        color = 'bg-gray-900 text-white';
        break;
      case 'Acier':
        color = 'bg-gray-400 text-white';
        break;
      case 'Glace':
        color = 'bg-blue-300 text-white';
        break;
      case 'Normal':
        color = 'bg-gray-300 text-gray-700';
        break;
      default:
        color = 'bg-gray-300 text-gray-700';
        break;
    }
    return `center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none ${color}`;
  }

}
