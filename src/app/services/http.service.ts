import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from "rxjs";
import { UserModel } from "../models/user.model";
import { UsersService } from "../store/users.service";

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	backUrl: string = 'https://705c-92-103-197-34.eu.ngrok.io'

	constructor (public httpClient: HttpClient, public userStore: UsersService) {
	}

	getUsers () {
		return this.httpClient.get<Array<UserModel>>(`${this.backUrl}/users`)
			.pipe(
				tap((users) => {
					this.userStore.saveUsers(users)
				})
			)
			.subscribe()
	}

	addUser (user: UserModel) {
		return this.httpClient.post<UserModel>(`${this.backUrl}/users`, user)
			.pipe(
				tap((user) => {
					this.userStore.addUser(user)
				})
			)
			.subscribe()
	}

	removeUser (userId: number) {
		return this.httpClient.delete(`${this.backUrl}/users/${userId}`)
			.pipe(
				tap(() => {
					this.userStore.removeUser(userId)
				})
			)
			.subscribe()
	}
}
