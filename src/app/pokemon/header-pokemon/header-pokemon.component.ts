import { Component } from '@angular/core';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
  selector: 'app-header-pokemon',
  templateUrl: './header-pokemon.component.html',
  standalone: true,
  imports: [
    SearchPokemonComponent
  ]
})
export class HeaderPokemonComponent {

}
