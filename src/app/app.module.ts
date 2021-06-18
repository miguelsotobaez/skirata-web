import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SparklineContainer } from './sparkline-container.directive';

import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule } from '@angular/common/http';
import { JaplusComponent } from './japlus/japlus.component';
import { ServersComponent } from './servers//servers.component';
import { EloComponent } from './elo/elo.component';
import { DownloadComponent } from './download/download.component';

import es from '@angular/common/locales/es';
    import { registerLocaleData } from '@angular/common';

    registerLocaleData(es);


import 'hammerjs';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    JaplusComponent,
    ServersComponent,
    EloComponent,
    DownloadComponent,
    PlayerComponent
    //SparklineContainer
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ChartsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
