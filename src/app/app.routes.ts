// Ng Features
import { Routes } from '@angular/router';

// Components
import { CharacterComponent } from './pages/character/character.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', title: 'Angular 17 con Rick y Morty', component: HomeComponent },
    { path: 'character', component: CharacterComponent },
];
