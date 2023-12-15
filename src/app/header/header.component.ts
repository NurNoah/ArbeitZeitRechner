import { Component } from '@angular/core';
import { DarkmodeserviceService } from '../darkmodeservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public ds: DarkmodeserviceService) {}

 
}
