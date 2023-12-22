import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { DarkmodeserviceService } from '../darkmodeservice.service';
import { CalcService } from '../calc.service';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public c: CalcService) {}
}
