import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
	{
		path: '', component: TeamComponent
	}
]

@NgModule({
  declarations: [
    TeamComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
	ReactiveFormsModule,
	RouterModule.forChild(routes),
	ComponentsModule
  ]
})
export class TeamModule { }
