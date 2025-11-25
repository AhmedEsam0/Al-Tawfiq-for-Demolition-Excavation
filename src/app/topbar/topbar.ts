import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  imports: [TranslatePipe],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {

}
