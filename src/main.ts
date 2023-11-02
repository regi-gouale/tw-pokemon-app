import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

const routes: Routes = [
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    {
        path: '',
        loadChildren: () => import("./app/pokemon/pokemon.routes")
            .then(m => m.default),
    },
    // {
    //     path: 'login',
    //     loadComponent: () => import("./app/login/login.component")
    //         .then(m => m.LoginComponent)
    // },
    {
        path: '**',
        loadComponent: () => import("./app/core/not-found/not-found.component")
            .then(m => m.NotFoundComponent)
    }
];



bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(
            BrowserModule,
            FormsModule,
            HttpClientInMemoryWebApiModule.forRoot(
                InMemoryDataService,
                { dataEncapsulation: false }
            )
        ),
        provideRouter(routes)
    ]
})
    .catch(err => console.error(err));
