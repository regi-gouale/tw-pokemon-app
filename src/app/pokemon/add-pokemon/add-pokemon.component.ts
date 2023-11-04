import { Component, OnInit } from '@angular/core';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { NgIf } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  standalone: true,
  imports: [
    PokemonFormComponent,
    NgIf,

  ]
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  
  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(pokemonList => {
      console.table(pokemonList);
      const id = pokemonList.length + 1;
      this.pokemon = new Pokemon(id);
      console.log(this.pokemon);
    });
  }
}
