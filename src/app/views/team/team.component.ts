import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from "../../models/user.model";
import { HttpService } from "../../services/http.service";
import { UsersService } from "../../store/users.service";

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

	frameworks: Array<string> = ['angular', 'react', 'vue']

	buttonFilter: string = '';
	searchFilter: string = '';

	constructor(public httpService: HttpService, public userStore: UsersService) {}

	ngOnInit(): void {
		this.httpService.getUsers()
	}

	get users () {
		return this.userStore.users
	}

	get formFirstName() {
		return this.formGrp.get('firstName');
	}
	get formLastName() {
		return this.formGrp.get('lastName');
	}
	get formFramework() {
		return this.formGrp.get('framework');
	}

	get filteredUsers () {
		if (this.buttonFilter) {
			return this.users.filter((user) => user.framework === this.buttonFilter)
		} else if (this.searchFilter) {
			const search = this.searchFilter.trim().toLowerCase()
			return this.users.filter((user) =>
				user.firstname.toLowerCase().includes(search)
				|| user.lastname.toLowerCase().includes(search)
				|| user.framework.toLowerCase().includes(search))
		} else {
			return this.users
		}
	}

	getUsersCountPerFramework (framework: string) {
		return this.users.filter((user) => user.framework === framework).length
	}

	getFrameworkImg (framework: string) {
		return `../../../assets/img/${framework}.png`
	}

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

	removeUser (userId: number) {
		this.httpService.removeUser(userId)
	}

	filterUsers (framework: string) {
		this.buttonFilter = framework
	}
}
