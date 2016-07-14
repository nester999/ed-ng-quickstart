import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';


const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  }, 
  {
    path: '', 
    component: DashboardComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
