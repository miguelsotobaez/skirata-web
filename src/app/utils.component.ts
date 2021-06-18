

export default class Utils {

    levelIcon(level){
      let level_icon = '';
      if(level>=1 && level <=9){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_1"></span><strong class="fa-stack-1x level_icon_1">'+level+'</strong></span>';
      }
      if(level>=10 && level <=19){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_10"></span><strong class="fa-stack-1x level_icon_10">'+level+'</strong></span>';
      }
      if(level>=20 && level <=29){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_20"></span><strong class="fa-stack-1x level_icon_20">'+level+'</strong></span>';
      }
      if(level>=30 && level <=39){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_30"></span><strong class="fa-stack-1x level_icon_30">'+level+'</strong></span>';
      }
      if(level>=40 && level <=49){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_40"></span><strong class="fa-stack-1x level_icon_40">'+level+'</strong></span>';
      }
      if(level>=50 && level <=59){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_50"></span><strong class="fa-stack-1x level_icon_50">'+level+'</strong></span>';
      }
      if(level>=60 && level <=69){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_60"></span><strong class="fa-stack-1x level_icon_60">'+level+'</strong></span>';
      }
      if(level>=70 && level <=79){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_70"></span><strong class="fa-stack-1x level_icon_70">'+level+'</strong></span>';
      }
      if(level>=80 && level <=89){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_80"></span><strong class="fa-stack-1x level_icon_80">'+level+'</strong></span>';
      }
      if(level>=90 && level <=99){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_90"></span><strong class="fa-stack-1x level_icon_90">'+level+'</strong></span>';
      }
      if(level==100){
          level_icon = '<span class="fa-stack table_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_100"></span><strong class="fa-stack-1x level_icon_100_number">'+level+'</strong></span>';
      }
      
      return level_icon;
    }

    levelIconPlayer(level){
      let level_icon = '';
      if(level>=1 && level <=9){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_1"></span><strong class="fa-stack-1x level_icon_1">'+level+'</strong></span>';
      }
      if(level>=10 && level <=19){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_10"></span><strong class="fa-stack-1x level_icon_10">'+level+'</strong></span>';
      }
      if(level>=20 && level <=29){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_20"></span><strong class="fa-stack-1x level_icon_20">'+level+'</strong></span>';
      }
      if(level>=30 && level <=39){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_30"></span><strong class="fa-stack-1x level_icon_30">'+level+'</strong></span>';
      }
      if(level>=40 && level <=49){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_40"></span><strong class="fa-stack-1x level_icon_40">'+level+'</strong></span>';
      }
      if(level>=50 && level <=59){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_50"></span><strong class="fa-stack-1x level_icon_50">'+level+'</strong></span>';
      }
      if(level>=60 && level <=69){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_60"></span><strong class="fa-stack-1x level_icon_60">'+level+'</strong></span>';
      }
      if(level>=70 && level <=79){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_70"></span><strong class="fa-stack-1x level_icon_70">'+level+'</strong></span>';
      }
      if(level>=80 && level <=89){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_80"></span><strong class="fa-stack-1x level_icon_80">'+level+'</strong></span>';
      }
      if(level>=90 && level <=99){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_90"></span><strong class="fa-stack-1x level_icon_90">'+level+'</strong></span>';
      }
      if(level==100){
          level_icon = '<span class="fa-stack player_level"><span class="fad fa-spinner-third fa-stack-2x level_icon_100"></span><strong class="fa-stack-1x level_icon_100_number">'+level+'</strong></span>';
      }
      
      return level_icon;
    }

    eloIconPlayer(elo){
      let league = '';
      if(elo <= 499){
        league = '<span class="fa-stack player_level"><span class="fad fa-circle fa-stack-2x smurf"></span><strong class="fa-stack-1x league_text">Sm</strong></span>';
      }else if(elo <= 1099){
        league = '<span class="fa-stack player_level"><span class="fad fa-circle fa-stack-2x iron"></span><strong class="fa-stack-1x league_text">Ir</strong></span>';
      }else if(elo >= 1100 && elo <= 1199){
        league = '<span class="fa-stack player_level"><span class="fad fa-circle fa-stack-2x bronze"></span><strong class="fa-stack-1x league_text">Br</strong></span>';
      }else if(elo >= 1200 && elo <= 1299){
        league = '<span class="fa-stack player_level"><span class="fad fa-circle fa-stack-2x silver"></span><strong class="fa-stack-1x league_text">Si</strong></span>';
      }else if(elo >= 1300 && elo <= 1399){
        league = '<span class="fa-stack player_level"><span class="fad fa-circle fa-stack-2x gold"></span><strong class="fa-stack-1x league_text">Go</strong></span>';
      }else if(elo >= 1400 && elo <= 1499){
        league = '<span class="fa-stack player_level"><span class="fad fa-circle fa-stack-2x platinum"></span><strong class="fa-stack-1x league_text">Pl</strong></span>';
      }else if(elo >= 1500){
        league = '<span class="fa-stack player_level"><span class="fad fa-circle fa-stack-2x diamond"></span><strong class="fa-stack-1x league_text">Di</strong></span>';
      }else if(elo > 1600){
        league = '<span class="fa-stack player_level"><span class="fad fa-circle fa-stack-2x immortal"></span><strong class="fa-stack-1x league_text">Im</strong></span>';
      }
      
      return league;
    }

    getLevel(XP){
      //let constA = 8.7;
      //let constB = -40
      //let constC = 111
      let constA = 10;
      let constB = -30
      let constC = 50
      return Math.max( Math.floor( constA * Math.log( XP + constC ) + constB ), 1 )
    }

  
  colorPlayer(name){
    let color_name = '';
    color_name = '<span class="white_name">'+name+'</span>';
    color_name = color_name.replace(/\^0/g,'</span><span class="black_name">'); //Black
    color_name = color_name.replace(/\^1/g,'</span><span class="red_name">'); //Red
    color_name = color_name.replace(/\^2/g,'</span><span class="green_name">'); //Green
    color_name = color_name.replace(/\^3/g,'</span><span class="yellow_name">'); //Yellow
    color_name = color_name.replace(/\^4/g,'</span><span class="blue_name">'); //Blue
    color_name = color_name.replace(/\^5/g,'</span><span class="cyan_name">'); //cyan
    color_name = color_name.replace(/\^6/g,'</span><span class="magenta_name">'); //Magenta
    color_name = color_name.replace(/\^7/g,'</span><span class="white_name">'); //white
    color_name = color_name.replace(/\^8/g,'</span><span class="orange_name">'); //Black
    color_name = color_name.replace(/\^9/g,'</span><span class="grey_name">'); //Red

    return color_name;
  }

  getLeague(elo){
    let league = '';
    if(elo <= 499){
      league = '<span class="badge badge-smurf">Smurf</span>';
    }else if(elo <= 1099){
      league = '<span class="badge badge-iron">Iron</span>';
    }else if(elo >= 1100 && elo <= 1199){
      league = '<span class="badge badge-bronze">Bronze</span>';
    }else if(elo >= 1200 && elo <= 1299){
      league = '<span class="badge badge-silver">Silver</span>';
    }else if(elo >= 1300 && elo <= 1399){
      league = '<span class="badge badge-gold">Gold</span>';
    }else if(elo >= 1400 && elo <= 1499){
      league = '<span class="badge badge-platinum">Platinum</span>';
    }else if(elo >= 1500){
      league = '<span class="badge badge-diamond">Diamond</span>';
    }else if(elo > 1600){
    league = '<span class="badge badge-immortal">Immortal</span>';
    }
    return league;
  }

  getLeagueTxt(elo){
    let league = '';
    if(elo <= 499){
      league = 'Smurf';
    }else if(elo <= 1099){
      league = 'Iron';
    }else if(elo >= 1100 && elo <= 1199){
      league = 'Bronze';
    }else if(elo >= 1200 && elo <= 1299){
      league = 'Silver';
    }else if(elo >= 1300 && elo <= 1399){
      league = 'Gold';
    }else if(elo >= 1400 && elo <= 1499){
      league = 'Platinum';
    }else if(elo >= 1500){
      league = 'Diamond';
    }else if(elo > 1600){
    league = 'Immortal';
    }
    return league;
  }

  colorPlayerTitle(name){
    let color_name = '';
    color_name = '<span class="fad fa-user-chart fa-fw"> </span> <span class="white_name"> '+name+'</span>';
    color_name = color_name.replace(/\^0/g,'</span><span class="black_name">'); //Black
    color_name = color_name.replace(/\^1/g,'</span><span class="red_name">'); //Red
    color_name = color_name.replace(/\^2/g,'</span><span class="green_name">'); //Green
    color_name = color_name.replace(/\^3/g,'</span><span class="yellow_name">'); //Yellow
    color_name = color_name.replace(/\^4/g,'</span><span class="blue_name">'); //Blue
    color_name = color_name.replace(/\^5/g,'</span><span class="cyan_name">'); //cyan
    color_name = color_name.replace(/\^6/g,'</span><span class="magenta_name">'); //Magenta
    color_name = color_name.replace(/\^7/g,'</span><span class="white_name">'); //white
    color_name = color_name.replace(/\^8/g,'</span><span class="orange_name">'); //Black
    color_name = color_name.replace(/\^9/g,'</span><span class="grey_name">'); //Red

    return color_name;
  }

  convert(unixtimestamp){
    // Months array
    var months_arr = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp*1000);
    // Year
    var year = date.getFullYear();
    // Month
    var month = months_arr[date.getMonth()];
    // Day
    var day = "0" +date.getDate();
    // Hours
    var hours = date.getHours();
    // Minutes
    var minutes = "0" + date.getMinutes();
    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = year+'-'+month+'-'+day.substr(-2)+' '+hours + ':' + minutes.substr(-2);
    
    return convdataTime;
    
   }

  
  getTolerance(len){
    var tol = 60;
    if(len <= 1000 && len >=900){
      tol = 56;
    }else if(len <= 899 && len >=800){
      tol = 52;
    }else if(len <= 799 && len >=700){
      tol = 48;
    }else if(len <= 699 && len >=600){
      tol = 44;
    }else if(len <= 599 && len >=500){
      tol = 40;
    }else if(len <= 499 && len >=400){
      tol = 36;
    }else if(len <= 399 && len >=300){
      tol = 32;
    }else if(len <= 299 && len >=200){
      tol = 28;
    }else if(len <= 199 && len >=100){
      tol = 24;
    }else if(len <= 99 && len >=0){
      tol = 12;
    }

    return tol;
  }

  setRouteMenu(server){
    const dashboard = document.querySelector('#dashboard');
    dashboard.className = 'element active mm-active';

    const information = document.querySelector('#information');
    information.className = 'element';

    if(server =="japlus"){
      const japlus = document.querySelector('#japlus');
      japlus.className = 'element active';

      const base = document.querySelector('#base');
      base.className = '';

      const esldueleuru = document.querySelector('#esldueleuru');
      esldueleuru.className = '';

      const jklduelna = document.querySelector('#jklduelna');
      jklduelna.className = '';

    }else if(server =="base"){
      const japlus = document.querySelector('#japlus');
      japlus.className = '';

      const base = document.querySelector('#base');
      base.className = 'element active';
      
      const esldueleuru = document.querySelector('#esldueleuru');
      esldueleuru.className = '';

      const jklduelna = document.querySelector('#jklduelna');
      jklduelna.className = '';
    }else if(server =="esldueleuru"){
      const japlus = document.querySelector('#japlus');
      japlus.className = '';

      const base = document.querySelector('#base');
      base.className = '';

      const esldueleuru = document.querySelector('#esldueleuru');
      esldueleuru.className = 'element active';

      const jklduelna = document.querySelector('#jklduelna');
      jklduelna.className = '';
    }else if(server =="jklduelna"){
      const japlus = document.querySelector('#japlus');
      japlus.className = '';

      const base = document.querySelector('#base');
      base.className = '';

      const esldueleuru = document.querySelector('#esldueleuru');
      esldueleuru.className = '';

      const jklduelna = document.querySelector('#jklduelna');
      jklduelna.className = 'element active';
    }

    const servers = document.querySelector('#servers');
    servers.className = '';

    const elo = document.querySelector('#elo');
    elo.className = '';

    const download = document.querySelector('#download');
    download.className = '';
  }

  objectSize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  notifyMe() {
    // Comprobamos si el navegador soporta las notificaciones
    if (!("Notification" in window)) {
      alert("Este navegador no soporta las notificaciones del sistema");
    }
  
    // Comprobamos si ya nos habían dado permiso
    else if (Notification.permission === "granted") {
      // Si esta correcto lanzamos la notificación
      var notification = new Notification("Holiwis :D");
    }
  
    // Si no, tendremos que pedir permiso al usuario
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // Si el usuario acepta, lanzamos la notificación
        if (permission === "granted") {
          var notification = new Notification("Gracias majo!");
        }
      });
    }
  
    // Finalmente, si el usuario te ha denegado el permiso y
    // quieres ser respetuoso no hay necesidad molestar más.
  }


}
