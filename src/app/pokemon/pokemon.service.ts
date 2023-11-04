import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.httpClient
      .get<Pokemon[]>('api/pokemons')
      .pipe(
        tap(pokemonList => {
          for (let pokemon of pokemonList) {
            this.log(pokemon);
          }
        }),
        catchError(
          (error) => this.handleError(error, []))
      );
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.httpClient.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError(
        (error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put<Pokemon>(`api/pokemons/${pokemon.id}`, pokemon, httpOptions).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError(
        (error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Pokemon>(`api/pokemons`, pokemon, httpOptions).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError(
        (error) => this.handleError(error, null))
    );
  }

  deletePokemonById(id: number): Observable<null> {
    return this.httpClient.delete(`api/pokemons/${id}`).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError(
        (error) => this.handleError(error, null))
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap(pokemonList => this.log(pokemonList)),
      catchError(
        (error) => this.handleError(error, []))
    );
  }

  private log(response: any): void {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  };

  getPokemonTypes(): string[] {
    return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
      'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
  }
}
