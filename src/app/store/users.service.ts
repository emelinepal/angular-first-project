import { Injectable } from '@angular/core';
import { UserModel } from "../models/user.model";

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	users: Array<UserModel> = []

	constructor () {
	}

	getUsers () {
		return this.users
	}

	saveUsers (users: Array<UserModel>) {
		this.users = users
	}

	addUser (user: UserModel) {
		this.users.push(user)
	}
}
