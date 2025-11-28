import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-copyright',
  imports: [TranslatePipe],
  templateUrl: './copyright.html',
  styleUrl: './copyright.css',
})
export class Copyright {

}
