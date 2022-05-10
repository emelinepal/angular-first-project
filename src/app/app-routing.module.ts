import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorModule } from './views/error/error/error.module';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about-us',
	  loadChildren: () =>
		import('./views/about-us/about-us.module').then(m => m.AboutUsModule)},
	{path: 'error', component: ErrorModule},
	{path: '**', redirectTo: 'error'}
  ];

@NgModule({
	imports: [
	  RouterModule.forRoot(routes),
	],
    exports: [RouterModule]
})
export class AppRoutingModule { }
