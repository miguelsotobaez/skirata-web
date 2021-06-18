import { Component, OnInit, ViewChild, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import Utils from '../utils.component'
import { DataService } from './../data.service';
;
import {
  Simplify,
  ISimplifyObjectPoint
} from 'simplify-ts';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
//const annotation = pluginAnnotations;

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  dtOptionsTop: DataTables.Settings = {};
  dtOptionsLast: DataTables.Settings = {};
  dtOptionsOponents: DataTables.Settings = {};
  mySubscription;

  utils = new Utils();
  
  player: any;
  data: any
  color_player: any;

  saber_win: any;
  saber_lose: any;
  saber_total: any;
  saber_ratio: any;
  saber_elo: any;
  saber_exp: any;

  ff_win: any;
  ff_lose: any;
  ff_total: any;
  ff_ratio: any;
  ff_elo: any;
  ff_exp: any;

  avg_damage_suffered: any;
  elo_history: any;
  saber_elo_list: any = [];
  ff_elo_list: any = [];
  saber_date: any = [];
  ff_date: any = [];
  last_saber_duels:any;
  last_full_force_duels:any;
  saber_oponents:any;
  full_force_oponents:any;
  server:any;
  server_name:any;
  is_japlus:any = false;

  public saberLineChartData: ChartDataSets[] = [
    { data: this.saber_elo_list }
  ];

  public saberLineChartLabels: Label[] = this.saber_date;

  public ffLineChartData: ChartDataSets[] = [
    { data: this.ff_elo_list }
  ];

  public ffLineChartLabels: Label[] = this.ff_date;

  public lineChartOptions: (ChartOptions & { annotation }) = {
    responsive: true,
    
    maintainAspectRatio: false,
    tooltips: {
      mode: 'nearest',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: false
    },
    annotation: {  // use global plugin.
      annotations: [
      {
        drawTime: 'afterDraw',
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 1200,
        borderColor: '#da4389',
        borderWidth: 1,
        label: {
          backgroundColor: '#da4389',
          content: 'Base Elo Line',
          enabled: true,
          position: 'center',
        }
      }
          ]
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        id: 'x-axis-0',
        position: 'left',
        gridLines: {
          color: 'rgb(54, 48, 66)',
        },
        ticks: {
          fontColor: 'rgb(128, 117, 148)',
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            color: 'rgb(54, 48, 66)',
          },
          ticks: {
            suggestedMin: 1000,
            fontColor: 'rgb(128, 117, 148)',
          }
        }
      ]
    }
  };
  public saberLineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(89, 194, 194, 0.2)',
      borderColor: 'rgb(89, 194, 194)',
      pointBackgroundColor: 'rgb(89, 194, 194)',
      pointBorderColor: 'rgb(89, 194, 194)',
      pointHoverBackgroundColor: 'rgb(89, 194, 194)',
      pointHoverBorderColor: 'rgb(89, 194, 194)'
    }
  ];

  public ffLineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(184, 216, 111, 0.2)',
      borderColor: 'rgb(184, 216, 111)',
      pointBackgroundColor: 'rgb(184, 216, 111)',
      pointBorderColor: 'rgb(184, 216, 111)',
      pointHoverBackgroundColor: 'rgb(184, 216, 111)',
      pointHoverBorderColor: 'rgb(184, 216, 111)'
    }
  ];

  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private dataService: DataService, private activedRoute: ActivatedRoute, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         // Trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
      }
    }); 
    
  }

  ngOnDestroy(){
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  ngOnInit(): void {

    this.dtOptionsTop = {
      responsive: true
    };

    this.dtOptionsLast = {
      pageLength: 10,
      responsive: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      info: false
    };

    this.dtOptionsOponents = {
      pageLength: 5,
      responsive: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      info: false
    };

    this.activedRoute.params.subscribe(params => {

      this.player = params.player;
      this.server = params.server;

      if(this.server == "japlus"){
        this.server_name = "JA+ Server";
        this.is_japlus = true;
        this.dataService.getPlayerSaberStatsJAPLUS(this.player).subscribe((data: any[])=>{
  
          this.data = data;
          this.data = this.data.data;
          this.color_player = this.data.stats[0].color_winner;
          this.saber_win = this.data.stats[0].win;
          this.saber_lose = this.data.stats[0].lose;
          this.saber_total = this.data.stats[0].total;
          this.saber_ratio = this.data.stats[0].ratio;
          this.saber_exp = this.data.stats[0].saber_exp;
          this.saber_elo = this.data.stats[0].elo;
          this.avg_damage_suffered = this.data.stats[0].avg_damage_suffered;
          this.elo_history = this.data.elo_history;
          this.last_saber_duels = this.data.duel_history;
          this.saber_oponents = this.data.duel_stats;
    
          var keys = Object.keys(this.elo_history);
          var len = keys.length;
          var tol = this.utils.getTolerance(len);
    
          const points: ISimplifyObjectPoint[] =  this.elo_history ;
          const tolerance: number = tol;
          const highQuality: boolean = true;
          
          const simplified_result = Simplify(points, tolerance, highQuality);
          simplified_result.forEach(element => {
            this.saber_elo_list.push(element.y);
            this.saber_date.push(this.utils.convert(element.x));
          });
        })  
    
        this.dataService.getPlayerFFStatsJAPLUS(this.player).subscribe((data: any[])=>{
    
          this.data = data;
          this.data = this.data.data;
          this.color_player = this.data.stats[0].color_winner;
          this.ff_win = this.data.stats[0].win;
          this.ff_lose = this.data.stats[0].lose;
          this.ff_total = this.data.stats[0].total;
          this.ff_ratio = this.data.stats[0].ratio;
          this.ff_exp = this.data.stats[0].ff_exp;
          this.ff_elo = this.data.stats[0].elo;
          this.avg_damage_suffered = this.data.stats[0].avg_damage_suffered;
          this.elo_history = this.data.elo_history;
          this.last_full_force_duels = this.data.duel_history;
          this.full_force_oponents = this.data.duel_stats;
    
          var keys = Object.keys(this.elo_history);
          var len = keys.length;
          var tol = this.utils.getTolerance(len);
    
          const points: ISimplifyObjectPoint[] =  this.elo_history ;
          const tolerance: number = tol;
          const highQuality: boolean = true;
          
          const simplified_result = Simplify(points, tolerance, highQuality);
          simplified_result.forEach(element => {
            this.ff_elo_list.push(element.y);
            this.ff_date.push(this.utils.convert(element.x));
          });
        })  
      }
      
    });
    this.utils.setRouteMenu(this.server);
  }

  

  

  

}
