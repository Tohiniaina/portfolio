import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';
import { ProjetsComponent } from './projets/projets.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MonFonctionComponent } from './mon_fonction/mon_fonction.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    ProjectCardComponent,
    FooterComponent,
    ProjetsComponent,
    MonFonctionComponent,
    ExperienceComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
