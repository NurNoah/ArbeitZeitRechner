import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
