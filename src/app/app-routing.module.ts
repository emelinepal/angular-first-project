import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ErrorModule } from './views/error/error/error.module';

const routes: Routes = [
	{
		path: '', 
		pathMatch: 'full',
		loadChildren: () =>
			import('./views/home/home.module')
				.then((module) => module.HomeModule),
	},
	{
		path: 'about-us',
		loadChildren: () =>
			import('./views/about-us/about-us.module')
				.then((module) => module.AboutUsModule),
	},
	{
		path: 'blog',
		loadChildren: () =>
			import('./views/blog/blog.module')
				.then((module) => module.BlogModule),
	},
	{
		path: 'news',
		loadChildren: () =>
			import('./views/news/news.module')
				.then((module) => module.NewsModule),
	},
	{
		path: 'team',
		loadChildren: () =>
			import('./views/team/team.module')
				.then((module) => module.TeamModule),
	},
	{
		path: 'contact',
		loadChildren: () => import('./views/contact/contact.module')
			.then((module) => module.ContactModule)
	},
	{
		path: 'error',
		component: ErrorModule
	},
	{
		path: '**',
		redirectTo: '/error'
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
