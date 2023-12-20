import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { DarkmodeserviceService } from '../darkmodeservice.service';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {

  constructor(public ds: DarkmodeserviceService, public c: CalcService) {}

}
// :)