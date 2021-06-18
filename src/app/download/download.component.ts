import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setRouteMenu();
  }

  setRouteMenu(){
    const dashboard = document.querySelector('#dashboard');
    dashboard.className = 'element';

    const information = document.querySelector('#information');
    information.className = 'element active mm-active';

    const sa = document.querySelector('#sa');
    sa.className = '';

    const na = document.querySelector('#na');
    na.className = '';

    const eu = document.querySelector('#eu');
    eu.className = '';

    const servers = document.querySelector('#servers');
    servers.className = '';

    const elo = document.querySelector('#elo');
    elo.className = '';

    const download = document.querySelector('#download');
    download.className = 'element active';
  }

}
