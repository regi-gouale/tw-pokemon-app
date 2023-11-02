import { Routes } from '@angular/router';
// import { authGuard } from '../auth.guard';
import { PokemonService } from './pokemon.service';

export default [{
    path: '',
    providers: [PokemonService],
    children: [
        // {
        //     path: 'edit/pokemon/:id',
        //     loadComponent: () => import('./edit-pokemon/edit-pokemon.component')
        //         .then(m => m.EditPokemonComponent),
        //     canActivate: [authGuard]
        // },
        // {
        //     path: 'add/pokemon',
        //     loadComponent: () => import('./add-pokemon/add-pokemon.component')
        //         .then(m => m.AddPokemonComponent),
        //     canActivate: [authGuard]
        // },
        {
            path: 'pokemons',
            loadComponent: () => import('./list-pokemon/list-pokemon.component')
                .then(m => m.ListPokemonComponent),
        },
        // {
        //     path: 'pokemon/:id',
        //     loadComponent: () => import('./detail-pokemon/detail-pokemon.component')
        //         .then(m => m.DetailPokemonComponent),
        //     canActivate: [authGuard]
        // },
    ]
}] as Routes;
