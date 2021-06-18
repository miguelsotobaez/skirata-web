import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JaplusComponent } from './japlus/japlus.component';
import { PlayerComponent } from './player/player.component';
import { ServersComponent } from './servers/servers.component';
import { EloComponent } from './elo/elo.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  { path: 'japlus', component: JaplusComponent},
  { path: ':server/player/:player', component: PlayerComponent, runGuardsAndResolvers: 'always', },
  { path: 'servers', component: ServersComponent },
  { path: 'elo', component: EloComponent },
  { path: 'download', component: DownloadComponent },
  { path: '', redirectTo: '/japlus', pathMatch: 'full' },
  { path: '**', redirectTo: '/japlus', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
