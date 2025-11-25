import { Component } from '@angular/core';
import { BlogHeader } from "./blog-header/blog-header";
import { BlogSection } from "./blog-section/blog-section";

@Component({
  selector: 'app-blog',
  imports: [BlogHeader, BlogSection],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
