import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  public getServerStatusJAPLUS(){
    return this.http.get('https://api-ranked.skirata.pro/API/status');
  }

  public getServerStatsJAPLUS(){
    return this.http.get('https://api-ranked.skirata.pro/API/server_stats');
  }

  public getFFAwlRatioJAPLUS(){
    return this.http.get('https://api-ranked.skirata.pro/API/ffa_wl_ratio');
  }

  public getSaberEloLevelJAPLUS(){
    return this.http.get('https://api-ranked.skirata.pro/API/saber_elo_level');
  }

  public getFFEloLevelJAPLUS(){
    return this.http.get('https://api-ranked.skirata.pro/API/ff_elo_level');
  }

  public getLastSaberDuelsJAPLUS(){
    return this.http.get('https://api-ranked.skirata.pro/API/last_saber_duels');
  }

  public getLastFullForceDuelsJAPLUS(){
    return this.http.get('https://api-ranked.skirata.pro/API/last_full_force_duels');
  }

  public getPlayerSaberStatsJAPLUS(player){
    const body = { player: player }
    return this.http.post('https://api-ranked.skirata.pro/API/player_saber_stats',body);
  }

  public getPlayerFFStatsJAPLUS(player){
    const body = { player: player }
    return this.http.post('https://api-ranked.skirata.pro/API/player_ff_stats',body);
  }

  public getKillerOfTheWeek(){
    return this.http.get('https://api-ranked.skirata.pro/API/lofw');
  }

  public getNoobOfTheWeek(){
    return this.http.get('https://api-ranked.skirata.pro/API/notw');
  }

}
