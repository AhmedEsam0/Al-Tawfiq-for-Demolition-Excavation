import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './blog-header.html',
  styleUrl: './blog-header.css',
})
export class BlogHeader {}
