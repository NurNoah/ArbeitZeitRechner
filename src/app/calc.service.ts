import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor() {}

  logKommZeit: string = '';

  logPausZeit: string = '';

  kommzeitValitext = '';

  testka = '';

  arbeitszeitSTD: number = 7;
  arbeitszeitMIN: number = 42;

  arbeitszeit(arbeitszeitSTD: number, arbeitszeitMIN: number) {
    return arbeitszeitSTD + ':' + arbeitszeitMIN;
  }

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
    if (pausezeit == null || pausezeit == '') {
      pausezeitnum = 0;
    } else {
      pausezeitnum = parseInt(pausezeit);
    }
    if (isNaN(pausezeitnum) || isNaN(kommzeitSTD) || isNaN(kommzeitMIN)) {
      this.showErrorMSG('Gebe gültige Werte ein');
    } else {
      if (
        pausezeitnum < 0 ||
        kommzeitSTD < 0 ||
        kommzeitMIN < 0 ||
        kommzeitSTD > 23 ||
        kommzeitMIN >= 60
      ) {
        this.showErrorMSG('Ungültige Zahl');
      } else {
        let ergebnisSTD: number = kommzeitSTD + this.arbeitszeitSTD;
        let ergebnisMIN: number =
          kommzeitMIN + this.arbeitszeitMIN + pausezeitnum;

        if (ergebnisMIN >= 0) {
          ergebnisSTD += ergebnisMIN / 60;
          ergebnisMIN = ergebnisMIN % 60;
        }

        if (ergebnisSTD >= 24) {
          ergebnisSTD -= 24;
        }
        labelergebnis.style.color = '';
        labelergebnis.textContent = Math.floor(ergebnisSTD) + ':' + ergebnisMIN;
      }
    }
  }

  showErrorMSG(msg: string): void {
    let labelergebnis = document.getElementById(
      'ergblable'
    ) as HTMLLabelElement;

    labelergebnis.style.color = 'red';
    labelergebnis.textContent = msg;
  }

  onKeyUp(event: KeyboardEvent, kommzeit: string, pausezeit: string): void {
    if (event.key == 'Enter') {
      this.berechne(kommzeit, pausezeit);
    }
  }

  validateInput(
    event: KeyboardEvent,
    kommzeit: string,
    pausenzeit: string
  ): void {
    //workarounds
    this.testka += pausenzeit;
    this.kommzeitValitext = kommzeit;

    if (
      (parseInt(kommzeit) > 2 &&
        parseInt(kommzeit) < 24 &&
        !kommzeit.includes(':') &&
        event.key !== 'Backspace') ||
      kommzeit == '01' ||
      kommzeit == '02'
    ) {
      this.kommzeitValitext = kommzeit + ':';
    }
    if (pausenzeit !== '' || this.testka !== '') {
      this.berechne(kommzeit, pausenzeit);
    }

    this.logData(kommzeit, pausenzeit);
  }

  logData(kommzeit: string, pausenzeit: string) {
    this.logKommZeit = kommzeit;
    this.logPausZeit = pausenzeit;
  }
}
