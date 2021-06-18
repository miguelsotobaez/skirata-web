import { Component, OnInit   } from '@angular/core';
import Utils from '../utils.component'
import { DataService } from '../data.service';
import './../../../node_modules/jquery-sparkline/jquery.sparkline.js'

declare var $:any;
@Component({
  selector: 'japlus',
  templateUrl: './japlus.component.html',
  styleUrls: ['./japlus.component.css']
})



export class JaplusComponent implements OnInit {
  dtOptionsTop: DataTables.Settings = {};
  dtOptionsLast: DataTables.Settings = {};
  title = 'skirata.duocoder.com';
  saber_elo_level:any;
  full_force_elo_level:any;
  server_stats:any = null;
  last_saber_duels:any;
  last_full_force_duels:any;
  server:any = "japlus";
  noob_of_the_week:any;
  killer_of_the_week:any;
  utils = new Utils();


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

    this.getData();
  }


  getData(){

    this.dataService.getServerStatsJAPLUS().subscribe((data: any[])=>{
      this.server_stats = data;
      this.server_stats = this.server_stats.data[0];
    })

    this.dataService.getSaberEloLevelJAPLUS().subscribe((data: any[])=>{
      this.saber_elo_level = data;
      this.saber_elo_level = this.saber_elo_level.data;
    })

    this.dataService.getFFEloLevelJAPLUS().subscribe((data: any[])=>{
      this.full_force_elo_level = data;
      this.full_force_elo_level = this.full_force_elo_level.data;
    })

    this.dataService.getLastSaberDuelsJAPLUS().subscribe((data: any[])=>{
      this.last_saber_duels = data;
      this.last_saber_duels = this.last_saber_duels.data;
    })

    this.dataService.getLastFullForceDuelsJAPLUS().subscribe((data: any[])=>{
      this.last_full_force_duels = data;
      this.last_full_force_duels = this.last_full_force_duels.data;
    })

    this.dataService.getKillerOfTheWeek().subscribe((data: any[])=>{
      this.killer_of_the_week = data;
      this.killer_of_the_week = this.killer_of_the_week.data[0];
    })

    this.dataService.getNoobOfTheWeek().subscribe((data: any[])=>{
      this.noob_of_the_week = data;
      this.noob_of_the_week = this.noob_of_the_week.data[0];
    })

    this.dtOptionsTop = {
      responsive: true,
      deferRender: true
    };

    this.dtOptionsLast = {
      pageLength: 10,
      responsive: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      info: false,
      deferRender: true
    };

    this.setRouteMenu();




  }

  setRouteMenu(){
    const dashboard = document.querySelector('#dashboard');
    dashboard.className = 'element active mm-active';

    const information = document.querySelector('#information');
    information.className = 'element';

    const sa = document.querySelector('#japlus');
    sa.className = 'element active';

    const elo = document.querySelector('#elo');
    elo.className = '';

    const download = document.querySelector('#download');
    download.className = '';
  }


}
