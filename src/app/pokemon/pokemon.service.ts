import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Pokemon, PokemonType } from './pokemon';

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
          this.log(pokemonList[0]);
        }),
        catchError(
          (error) => this.handleError(error, []))
      );
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.httpClient.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap(pokemon => {
        // this.log(pokemon);
      }),
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
      console.log('term is empty');
      return of([]);
    }
    // const options = {
    //   params: { name[fr]: term }
    // };
    return this.httpClient.get<Pokemon[]>(`api/pokemons/?name.fr=${term}`).pipe(
      tap(pokemonList => {
        this.log(pokemonList);
      }),
      catchError(
        (error) => this.handleError(error, []))
    );
  }

  private log(response: any): void {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  };

  getPokemonTypes(): PokemonType[] {
    return [
      {
        name: 'Plante',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/plante.png"
      },
      {
        name: 'Feu',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png"
      },
      {
        name: 'Eau',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/eau.png"
      },
      {
        name: 'Insecte',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/insecte.png"
      },
      {
        name: 'Normal',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/normal.png"
      },
      {
        name: 'Electrik',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/electrik.png"
      },
      {
        name: 'Poison',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/poison.png"
      },
      {
        name: 'Fée',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/fee.png"
      },
      {
        name: 'Vol',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/vol.png"
      },
      {
        name: 'Combat',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/combat.png"
      },
      {
        name: 'Psy',
        image: "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/psy.png"
      },
    ];
  }
}
