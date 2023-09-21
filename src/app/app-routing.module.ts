import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PublicationsPageComponent } from './publications-page/publications-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { TeachingPageComponent } from './teaching-page/teaching-page.component';

const routes: Routes = [
  {
    path: 'research',
    component: ResearchPageComponent
  },
  {
    path: 'publications',
    component: PublicationsPageComponent
  },
  {
    path: 'teaching',
    component: TeachingPageComponent
  },
  {
    path: 'service',
    component: ServicePageComponent
  },
  {
    path: 'contact',
    component: ContactCardComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
