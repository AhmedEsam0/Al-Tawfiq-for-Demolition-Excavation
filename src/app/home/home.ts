import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AboutSection } from '../about/about-section/about-section';
import { BlogSection } from '../blog/blog-section/blog-section';
import { ContactSection } from '../contact/contact-section/contact-section';
import { FeaturesSection } from '../features/features-section/features-section';
import { ServicesSection } from '../services/services-section/services-section';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    AboutSection,
    BlogSection,
    ContactSection,
    FeaturesSection,
    ServicesSection,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  implements AfterViewInit{
  @ViewChildren('slideVideo') videosRef!: QueryList<ElementRef<HTMLVideoElement>>;

  ngAfterViewInit() {
    this.videosRef.forEach((ref) => {
      const video = ref.nativeElement;

      if (video instanceof HTMLVideoElement) {
        video.muted = true;
        video.autoplay = true;
      }
    });
  }
}
