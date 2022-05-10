import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	}
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
	  RouterModule.forChild(routes),
    FormsModule
  ]
})
export class HomeModule { 
	isTriggeredLuigi = false;
}
