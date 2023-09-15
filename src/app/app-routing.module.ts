import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "resume",
		component: ResumeComponent,
	},
	{
		path: "blog/posts/:uid/:title",
		component: BlogPostComponent,
	},
	{
		path: "blog/posts/not-found",
		component: BlogPostComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
