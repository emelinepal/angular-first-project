import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from 'src/app/components/article/article.component';

const routes: Routes = [
	{
		path: '',
		component: BlogComponent,
	},
];

@NgModule({
	declarations: [BlogComponent, ArticleComponent],
	imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class BlogModule {
}
