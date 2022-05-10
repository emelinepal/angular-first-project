import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './component/member/member.component';

const routes: Routes = [
	{
		path: '', component: TeamComponent
	}
]

@NgModule({
	declarations: [
		TeamComponent,
		MemberComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
	]
})
export class TeamModule {
}
