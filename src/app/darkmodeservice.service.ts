import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeserviceService {
  darkmodeIMG = 'assets/img/nightmode.png';
  settingIMG = "assets/img/SettingsIconblack.png"

  isDarkmode = false;

  toggleDarkmode() {
    document.getElementById('bdy')?.classList.toggle('dark-mode');
    document.getElementById('bdy2')?.classList.toggle('dark-mode');
    document.getElementById('bdy4')?.classList.toggle('dark-mode');
    
    if(this.isDarkmode == false){
      this.isDarkmode = true;
    }else{
      this.isDarkmode = false
    }

    console.log(this.isDarkmode)

   document.querySelector('html')?.classList.toggle('dark-mode');

    this.toggledarkmodeimg();
  }

  toggledarkmodeimg() {
    if (this.darkmodeIMG == 'assets/img/nightmode.png') {
      this.darkmodeIMG = 'assets/img/lightmode.png';
      this.settingIMG = "assets/img/SettingsIconblackwhite.png"
    } else {
      this.darkmodeIMG = 'assets/img/nightmode.png';
      this.settingIMG = "assets/img/SettingsIconblack.png"
    }
  }
}
