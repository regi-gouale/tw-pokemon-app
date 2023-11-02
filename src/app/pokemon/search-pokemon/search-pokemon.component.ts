import { NgFor, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe
  ]
})
export class SearchPokemonComponent implements OnInit {
  // Flux de données dans le temps des recherches de l'utilisateurs
  searchTerms = new Subject<string>();
  // Flux de données dans le temps des pokemons correspondant aux termes de recherche
  pokemons$: Observable<Pokemon[]> | undefined;

  constructor(
    private router: Router, 
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // on retourne la liste des résultats correspondant aux termes de recherche
      switchMap((term: string) => this.pokemonService.searchPokemonList(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon): void{
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
