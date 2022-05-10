import { Injectable } from '@angular/core';
import { UserModel } from "../models/user.model";

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	users: Array<UserModel> = []

	constructor () {
	}

	saveUsers (users: Array<UserModel>) {
		this.users = users
	}

	addUser (user: UserModel) {
		this.users.push(user)
	}

	removeUser (userId: number) {
		this.users = this.users.filter(user => user.id !== userId)
	}
}
