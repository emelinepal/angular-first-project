import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectOption } from 'src/app/interfaces/select-option';

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
		return this.formGrp.get('firstName') as FormControl;
	}
	get formLastName() {
		return this.formGrp.get('lastName') as FormControl;
	}
	get formFramework() {
		return this.formGrp.get('framework') as FormControl;
	}

	frameworkOptions: SelectOption[] = [
		{ name: 'Angular', value: 'angular' },
		{ name: 'Vue', value: 'vue' },
		{ name: 'React', value: 'react' },
	];

	constructor() {}

	ngOnInit(): void {}

	addUser() {
		console.log(this.formGrp.value);
	}
}
