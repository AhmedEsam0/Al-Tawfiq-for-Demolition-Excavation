import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Features } from './features/features';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'features', component: Features },
  { path: 'blog', component: Blog },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
