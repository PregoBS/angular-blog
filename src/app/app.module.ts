import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { LargeCardComponent } from './components/large-card/large-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ResumeSectionComponent } from './components/resume-section/resume-section.component';
import { ResumeHeaderComponent } from './components/resume-header/resume-header.component';
import { BlogPostNotFoundComponent } from './pages/blog-post-not-found/blog-post-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    LargeCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    HomeComponent,
    BlogPostComponent,
    FooterComponent,
    BackButtonComponent,
    ResumeComponent,
    ResumeSectionComponent,
    ResumeHeaderComponent,
    BlogPostNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
