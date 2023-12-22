import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CalcService } from '../calc.service';
import { DarkmodeserviceService } from '../darkmodeservice.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<SettingsDialogComponent>,
    public c: CalcService,
    public ds: DarkmodeserviceService,
    public op: SettingsService
  ) {}

  arbeitszeitValitext = '';

  closeDialog(arbeitszeit: string): void {
    this.op.onSave(arbeitszeit);

    this.dialogRef.close();
  }
}
