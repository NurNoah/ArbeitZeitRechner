import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})

export class SettingsDialogComponent {
  constructor(private dialogRef: MatDialogRef<SettingsDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
