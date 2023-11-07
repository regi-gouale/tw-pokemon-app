import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { LoaderComponent } from 'src/app/core/loader/loader.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonType } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
  standalone: true,
  imports: [
    LoaderComponent,
    NgFor,
    FormsModule,
    PokemonTypeColorPipe,
    NgIf
  ]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: any;
  types: PokemonType[] = [];
  isAddForm: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: PokemonType): boolean {
    const found = this.pokemon.types.find(
      (pokemonType: PokemonType) => {
        return pokemonType.name === type.name;
      });

    return found !== undefined;

  }

  selectType($event: Event, type: PokemonType) {
    const checked = ($event.target as HTMLInputElement).checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.addPokemon();
    } else {
      this.updatePokemon();
    }
    this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
  }

  addPokemon() {
    this.pokemonService.addPokemon(this.pokemon)
      .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
  }

  updatePokemon() {
    this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
  }

  isTypesValid(type: PokemonType): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  goBack() {
    window.history.back();
  }
}
