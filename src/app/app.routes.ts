import { Routes } from '@angular/router';
import { Boutique } from './pages/boutique/boutique';
import { AnciensTps } from './pages/anciens-tps/anciens-tps';

export const routes: Routes = [
  { path: '', component: Boutique },
  { path: 'anciens-tps', component: AnciensTps },
  { path: '**', redirectTo: '' },
];
