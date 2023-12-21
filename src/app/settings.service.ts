import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { DarkmodeserviceService } from './darkmodeservice.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private dialog: MatDialog, public ds: DarkmodeserviceService) {}
  arbeitszeitValitext = "";

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
}
