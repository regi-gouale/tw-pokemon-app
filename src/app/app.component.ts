import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPokemonComponent } from './pokemon/search-pokemon/search-pokemon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'Pokédex';
}
