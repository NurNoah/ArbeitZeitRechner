import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeserviceService {
  darkmodeIMG = 'assets/img/nightmode.png';

  toggleDarkmode() {
    document.getElementById('bdy')?.classList.toggle('dark-mode');
    document.getElementById('bdy2')?.classList.toggle('dark-mode');
    document.getElementById('bdy4')?.classList.toggle('dark-mode');

    document.querySelector('html')?.classList.toggle('dark-mode');

    this.toggledarkmodeimg();
  }

  toggledarkmodeimg() {
    if (this.darkmodeIMG == 'assets/img/nightmode.png') {
      this.darkmodeIMG = 'assets/img/lightmode.png';
    } else {
      this.darkmodeIMG = 'assets/img/nightmode.png';
    }
  }
}
