import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  berechne(kommzeit: string, pausezeit: string) {

    let splitS: string[];
    let kommzeitSTD: number = 0;
    let kommzeitMIN: number = 0;
    let pausezeitnum: number = 0;
    let labelergebnis = document.getElementById(
      'ergblable'
    ) as HTMLLabelElement;

    splitS = kommzeit.split(':');

    kommzeitSTD = parseInt(splitS[0]);

    if (splitS[1] == '' || splitS[1] == null) {
      kommzeitMIN = 0;
    } else {
      kommzeitMIN = parseInt(splitS[1]);
    }
    pausezeitnum = parseInt(pausezeit);

    if (isNaN(pausezeitnum) || isNaN(kommzeitSTD) || isNaN(kommzeitMIN)) {
      labelergebnis.textContent = 'Gebe zahl an';
    } else {
      if (
        pausezeitnum < 0 ||
        kommzeitSTD < 0 ||
        kommzeitMIN < 0 ||
        kommzeitSTD > 23 ||
        kommzeitMIN >= 60
      ) {
        labelergebnis.textContent = 'Ungültige Zahl';
      } else {
        
        let ergebnisSTD: number = kommzeitSTD + 7;
        let ergebnisMIN: number = kommzeitMIN + 42 + pausezeitnum;

        if (ergebnisMIN >= 0) {
          ergebnisSTD += ergebnisMIN / 60;
          ergebnisMIN = ergebnisMIN % 60;
        }

        if (ergebnisSTD >= 24) {
          ergebnisSTD -= 24;
        }

        labelergebnis.textContent = Math.floor(ergebnisSTD) + ':' + ergebnisMIN;
      }
    }
  }

  onKeyUp(event: KeyboardEvent, kommzeit: string, pausezeit: string): void {
    if (event.key == 'Enter') {
      this.berechne(kommzeit, pausezeit);
    }
  }
}
