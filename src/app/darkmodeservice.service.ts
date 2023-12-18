import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeserviceService {
  darkmodeIMG = 'assets/img/nightmode.png';

  toggleDarkmode() {
    let body = document.getElementById('bdy') as HTMLLabelElement;
    let body2 = document.getElementById('bdy2') as HTMLLabelElement;

    let body4 = document.getElementById('bdy4') as HTMLLabelElement;

    document.querySelector('html')?.classList.toggle('dark-mode');

    body.classList.toggle('dark-mode');
    body2.classList.toggle('dark-mode');

    body4.classList.toggle('dark-mode');

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
