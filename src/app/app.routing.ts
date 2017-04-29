import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: ''          , component: LoginComponent },
    { path: 'home'      , component: HomeComponent },
    { path: 'graficos'  , component: HomeComponent },
    { path: 'extrato'   , component: HomeComponent },
    { path: 'ordens'    , component: HomeComponent },
    { path: 'noticias'  , component: HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);