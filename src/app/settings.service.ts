import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private dialog: MatDialog) {}

  openSettingsDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent);

    // Du kannst hier weitere Aktionen nach dem Schließen des Dialogs hinzufügen
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog geschlossen', result);
    });
  }
}
