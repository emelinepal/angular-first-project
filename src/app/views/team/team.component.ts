import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
	formGrp: FormGroup = new FormGroup({
		firstName: new FormControl(),
		lastName: new FormControl(),
		framework: new FormControl(),
	});

	get formFirstName() {
		return this.formGrp.get('firstName');
	}
	get formLastName() {
		return this.formGrp.get('lastName');
	}
	get formFramework() {
		return this.formGrp.get('framework');
	}

	constructor() {}

	ngOnInit(): void {}

	addUser() {
		console.log(this.formFirstName ? this.formFirstName.value : "");
		console.log(this.formLastName ? this.formLastName.value : "");
		console.log(this.formFramework ? this.formFramework.value : "");
	}
}
