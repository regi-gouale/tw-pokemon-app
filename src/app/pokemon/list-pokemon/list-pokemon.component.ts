import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router, RouterLink } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { HeaderPokemonComponent } from '../header-pokemon/header-pokemon.component';
import { LoaderComponent } from 'src/app/core/loader/loader.component';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    BorderCardDirective,
    RouterLink,
    UpperCasePipe,
    DatePipe,
    PokemonTypeColorPipe,
    HeaderPokemonComponent,
    LoaderComponent
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemons!: Pokemon[];
  selectedPokemon: Pokemon | undefined;


  constructor(
    private router: Router,
    private pokemonService: PokemonService,

  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(
      (pokemons) => this.pokemons = pokemons
    );
  }

  selectPokemon(pokemonId: string): void {
    const pokemon: Pokemon | undefined = this.pokemons.find(
      pokemon => pokemon.id === +(pokemonId)
    );
    if (!pokemon) {
      console.error(`Le Pokémon avec ID: ${pokemonId} n'a pas été trouvé`);
      this.selectedPokemon = undefined;
      return;
    }
    // console.log(`Vous avez selectionné ${pokemon.name}`);
    this.selectedPokemon = pokemon;
  }

  goToPokemonDetail(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
