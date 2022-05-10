import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ErrorModule } from './views/error/error/error.module';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'about-us',
		loadChildren: () =>
			import('./views/about-us/about-us.module').then(
				(m) => m.AboutUsModule
			),
	},
	{
		path: 'blog',
		loadChildren: () =>
			import('./views/blog/blog.module').then((m) => m.BlogModule),
	},
	{
		path: 'news',
		loadChildren: () =>
			import('./views/news/news.module').then((m) => m.NewsModule),
	},
	{
		path: 'team',
		loadChildren: () =>
			import('./views/team/team.module').then((m) => m.TeamModule),
	},
	{ path: 'error', component: ErrorModule },
	{ path: '**', redirectTo: 'error' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
