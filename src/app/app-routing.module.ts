import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PublicationsPageComponent } from './publications-page/publications-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { CvPageComponent } from './cv-page/cv-page.component';

const routes: Routes = [
  {
    path: 'research',
    component: ResearchPageComponent,
    title: 'Research'
  },
  {
    path: 'publications',
    component: PublicationsPageComponent,
    title: 'Publications'
  },
  {
    path: 'cv',
    component: CvPageComponent,
    title: 'CV'
  },
  {
    path: 'contact',
    component: ContactCardComponent,
    title: 'Contact'
  },
  {
    path: '',
    component: HomePageComponent,
    title: 'Michael Kintscher'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
