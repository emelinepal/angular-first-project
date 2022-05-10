import { Injectable } from '@angular/core';
import { UserModel } from "../models/user.model";
import { HttpService } from "../services/http.service";

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	users: Array<UserModel> = []

	constructor (public httpService: HttpService) {
	}

	getUsers () {
		return this.users
	}

	saveUsers (users: Array<UserModel>) {
		this.users = users
	}

	addUser (user: UserModel) {
		this.httpService.addUser(user)
	}
}
