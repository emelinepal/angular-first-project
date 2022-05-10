import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectOption } from 'src/app/interfaces/select-option';
import { UserModel } from '../../models/user.model';
import { HttpService } from '../../services/http.service';
import { UsersService } from '../../store/users.service';

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

	constructor(
		public httpService: HttpService,
		public userStore: UsersService
	) {}

	ngOnInit(): void {
		this.httpService.getUsers();
	}

	get users() {
		return this.userStore.users;
	}

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

	addUser() {
		const firstname = this.formFirstName?.value
		const lastname = this.formLastName?.value
		const framework = this.formFramework?.value

		if (firstname && lastname && framework) {
			const user : UserModel = {
				firstname: firstname,
				lastname: lastname,
				framework: framework
			}

			this.httpService.addUser(user)
		}
	}

	removeUser(userId: number) {
		this.httpService.removeUser(userId);
	}
}
