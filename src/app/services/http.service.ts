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
		return this.httpClient.get(`${this.backUrl}/users`)
			.pipe(
				tap((response) => {
					console.log(response)
					// this.userStore.saveUsers()
				})
			)
			.subscribe()
	}

	addUser (user: UserModel) {
		return this.httpClient.post(`${this.backUrl}/users`, user)
			.pipe(
				tap((response) => {
					console.log(response)
				})
			)
			.subscribe()
	}
}
