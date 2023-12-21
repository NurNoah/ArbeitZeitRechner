import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor() {}

  kommzeitValitext = "";

  testka = false

  arbeitszeitSTD:number = 7;
  arbeitszeitMIN:number = 42;

  arbeitszeit(arbeitszeitSTD:number, arbeitszeitMIN:number){

  return arbeitszeitSTD + ":" + arbeitszeitMIN

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
    if(pausezeit == null || pausezeit == ''){
      pausezeitnum = 0
    }else{
    pausezeitnum = parseInt(pausezeit);
    }
    if (isNaN(pausezeitnum) || isNaN(kommzeitSTD) || isNaN(kommzeitMIN)) {
      this.showErrorMSG('Gebe zahl an');
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

  showErrorMSG(msg:string): void{
    let labelergebnis = document.getElementById(
      'ergblable'
    ) as HTMLLabelElement;

    labelergebnis.textContent = msg;
  }

  onKeyUp(event: KeyboardEvent, kommzeit: string, pausezeit: string): void {
    if (event.key == 'Enter') {
      this.berechne(kommzeit, pausezeit);
    }
  }

  validateInput(event: KeyboardEvent , inputinhalt:string, pausenzeit:string): void {

    this.kommzeitValitext = inputinhalt
    if((parseInt(inputinhalt) > 2 && parseInt(inputinhalt) < 24 && !inputinhalt.includes(':') && event.key !== 'Backspace') || inputinhalt == "01" || inputinhalt == "02"){
      this.kommzeitValitext = inputinhalt + ":"
      
    }
    if(pausenzeit !== "" || (this.testka))
    this.berechne(inputinhalt, pausenzeit)
    this.testka = true
  }

}
