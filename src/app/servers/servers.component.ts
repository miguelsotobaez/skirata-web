import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import Utils from '../utils.component'

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  utils = new Utils();
  japlus_data:any;
  japlus_map:any;
  japlus_maxplayers:any;
  japlus_name:any;
  japlus_players:any;
  japlus_bots:any;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.setRouteMenu();

    this.dataService.getServerStatusJAPLUS().subscribe((data: any[])=>{
      this.japlus_data = data;
      this.japlus_map = this.japlus_data.data.map;
      this.japlus_maxplayers = this.japlus_data.data.maxplayers;
      this.japlus_name = this.japlus_data.data.name;
      this.japlus_players = this.japlus_data.data.players;
      this.japlus_bots = this.japlus_data.data.bots;
    })  

   
  }

  setRouteMenu(){
    const dashboard = document.querySelector('#dashboard');
    dashboard.className = 'element';

    const information = document.querySelector('#information');
    information.className = 'element active mm-active';
    
    const japlus = document.querySelector('#japlus');
    japlus.className = '';

    const servers = document.querySelector('#servers');
    servers.className = 'element active';

    const elo = document.querySelector('#elo');
    elo.className = '';

    const download = document.querySelector('#download');
    download.className = '';
  }

}
