import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCardComponent } from './pages/contact-card-page/contact-card-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PublicationsPageComponent } from './pages/publications-page/publications-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { ElementsReferencePageComponent } from './pages/elements-reference-page/elements-reference-page.component';

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
    path: 'elements',
    component: ElementsReferencePageComponent,
    title: 'Elements'
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
