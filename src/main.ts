import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

const routes: Routes = [
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    {
        path: '**',
        loadComponent: () => import("./app/core/not-found/not-found.component")
            .then(m => m.NotFoundComponent)
    }
];



bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(BrowserModule, FormsModule),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
