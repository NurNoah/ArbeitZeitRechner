import { ChangeDetectionStrategy, Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { DarkmodeserviceService } from '../darkmodeservice.service';
import { CalcService } from '../calc.service';
import { FormControl, FormGroup } from '@angular/forms';
import { tuiCreateTimePeriods } from '@taiga-ui/kit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {

  constructor(public ds: DarkmodeserviceService, public c: CalcService) { }

  

  items1 = tuiCreateTimePeriods();
  items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);

}