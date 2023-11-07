import { NgIf, NgFor, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { LoaderComponent } from 'src/app/core/loader/loader.component';
import { HeaderPokemonComponent } from '../header-pokemon/header-pokemon.component';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  standalone: true,
  imports: [
    NgIf, 
    NgFor, 
    LoaderComponent, 
    DatePipe, 
    PokemonTypeColorPipe,
    HeaderPokemonComponent
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonById(+id).subscribe(
        (pokemon) => this.pokemon = pokemon
      );
    }
  }
  goToPokemonList(): void {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(): void {
    if (this.pokemon) {
      this.router.navigate(['/edit/pokemon', this.pokemon.id]);
    }
  }

  deletePokemon(): void {
    if (this.pokemon) {
      this.pokemonService.deletePokemonById(this.pokemon.id).subscribe(
        () => this.goToPokemonList()
      );
    }
  }

  goBack(): void {
    window.history.back();
  }
}
