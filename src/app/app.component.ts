import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { name } from '../../package.json';
import { DataService } from './data.service';
import { version } from '../../package.json';
import 'metismenu';
import Utils from './utils.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'skirata.duocoder.com';
  public name: string = name;
  public version: string = version;
  utils = new Utils();
  japlus_data:any;
  japlus_map:any;
  japlus_maxplayers:any;
  japlus_name:any;
  japlus_players:any;
  japlus_bots:any;

  subscription: Subscription;
  source = interval(30000);
  text = 'Your Text Here';

  players_count = 0;
  player_connected_message = "No Players Connected";

  constructor(private router:Router, private dataService: DataService){ }

  ngAfterViewInit() {
    $('#menu1').metisMenu();
    setTimeout(function(){
      $('body').toggleClass('loaded');
    }, 1000);

  }

  ngOnInit() {
    this.getServerData();
    this.subscription = this.source.subscribe(val =>
      this.getServerData()
    );


  }

  getServerData(){
    this.dataService.getServerStatusJAPLUS().subscribe((data: any[])=>{
      this.japlus_data = data;
      this.japlus_map = this.japlus_data.data.map;
      this.japlus_maxplayers = this.japlus_data.data.maxplayers;
      this.japlus_name = this.japlus_data.data.name;
      this.japlus_players = this.japlus_data.data.players;
      this.japlus_bots = this.japlus_data.data.bots;
      this.players_count = this.utils.objectSize(this.japlus_data.data.players) + this.utils.objectSize(this.japlus_data.data.bots);
      if (this.players_count == 0){
        this.player_connected_message = "No Players Connected";
      }else if(this.players_count >1){
        this.player_connected_message = this.players_count + " Players Connected";
        this.utils.notifyMe();
      }else{
        this.player_connected_message = this.players_count + " Player Connected";
      }
    })
  }
}


