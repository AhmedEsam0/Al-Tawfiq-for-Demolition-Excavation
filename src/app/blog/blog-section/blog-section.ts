import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-section',
  imports: [TranslatePipe],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css',
})
export class BlogSection {}
