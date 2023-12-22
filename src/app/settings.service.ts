import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { DarkmodeserviceService } from './darkmodeservice.service';
import { CalcService } from './calc.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private dialog: MatDialog,
    public ds: DarkmodeserviceService,
    public c: CalcService
  ) {}
  arbeitszeitValitext = '';

  openSettingsDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent);

    // Du kannst hier weitere Aktionen nach dem Schließen des Dialogs hinzufügen
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog geschlossen', result);
    });

    if (this.ds.isDarkmode == true) {
      document.getElementById('bdy3')?.classList.toggle('dark-mode');
    }
  }

  validateInput(event: KeyboardEvent, inputinhalt: string): void {
    this.arbeitszeitValitext = inputinhalt;
    if (
      (parseInt(inputinhalt) > 2 &&
        parseInt(inputinhalt) < 24 &&
        !inputinhalt.includes(':') &&
        event.key !== 'Backspace') ||
      inputinhalt == '01' ||
      inputinhalt == '02'
    ) {
      this.arbeitszeitValitext = inputinhalt + ':';
    }
  }

  onSave(arbeitszeit: string) {
    let splitS: string[];

    splitS = arbeitszeit.split(':');

    this.c.arbeitszeitSTD = parseInt(splitS[0]);

    if (splitS[1] == '' || splitS[1] == null) {
      this.c.arbeitszeitMIN = 0;
    } else {
      this.c.arbeitszeitMIN = parseInt(splitS[1]);
    }

    this.c.berechne(this.c.logKommZeit, this.c.logPausZeit);
  }

  deletvalue() {
    const inputElement = <HTMLInputElement>(
      document.getElementById('arbeitszeit')
    );
    if (inputElement) {
      inputElement.value = '';
    }
  }

  reset() {
    const inputElement = <HTMLInputElement>(
      document.getElementById('arbeitszeit')
    );
    if (inputElement) {
      inputElement.value = '7:42';
    }
  }

  valiSave(arbeitszeit: string) {
    const meinButton: HTMLButtonElement | null = document.getElementById(
      'savebutton'
    ) as HTMLButtonElement;
    let arbeitszeitMIN = 0;
    let arbeitszeitSTD = 0;
    let splitS: string[];

    splitS = arbeitszeit.split(':');

    arbeitszeitSTD = parseInt(splitS[0]);

    if (splitS[1] == '' || splitS[1] == null) {
      arbeitszeitMIN = 0;
    } else {
      arbeitszeitMIN = parseInt(splitS[1]);
    }
    if (isNaN(arbeitszeitSTD) || isNaN(arbeitszeitMIN)) {
      meinButton.disabled = true;
    } else {
      if (
        arbeitszeitSTD < 0 ||
        arbeitszeitMIN < 0 ||
        arbeitszeitSTD > 23 ||
        arbeitszeitMIN >= 60
      ) {
        meinButton.disabled = true;
      } else {
        meinButton.disabled = false;
      }
    }
  }
}
