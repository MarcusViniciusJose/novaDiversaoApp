import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'scoob',
    loadChildren: () => import('./filmes/scoob/scoob.module').then( m => m.ScoobPageModule)
  },
  {
    path: 'f1917',
    loadChildren: () => import('./filmes/f1917/f1917.module').then( m => m.F1917PageModule)
  },
  {
    path: 'rick-emorty',
    loadChildren: () => import('./series/rick-emorty/rick-emorty.module').then( m => m.RickEmortyPageModule)
  },
  {
    path: 'rick-emorty',
    loadChildren: () => import('./series/rick-emorty/rick-emorty.module').then( m => m.RickEmortyPageModule)
  },
  {
    path: 'ponto-cego',
    loadChildren: () => import('./series/ponto-cego/ponto-cego.module').then( m => m.PontoCegoPageModule)
  },
  {
    path: 'os-smurfs',
    loadChildren: () => import('./desenhos/os-smurfs/os-smurfs.module').then( m => m.OsSmurfsPageModule)
  },
  {
    path: 'ursinhos-carinhosos',
    loadChildren: () => import('./desenhos/ursinhos-carinhosos/ursinhos-carinhosos.module').then( m => m.UrsinhosCarinhososPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
