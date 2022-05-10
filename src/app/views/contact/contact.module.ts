import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from './contact.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
	{ path: '', component: ContactComponent }
]

@NgModule({
	declarations: [
		ContactComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ComponentsModule,
		RouterModule.forChild(routes)
	]
})
export class ContactModule {
}
