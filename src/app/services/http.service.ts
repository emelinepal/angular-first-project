import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { UsersService } from "../store/users.service";

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor (public httpClient: HttpClient, public userStore: UsersService) {
	}

	getUsers () {
		return this.httpClient.get('http://10.69.2.40:3000')
			.subscribe((response) => {
				console.log(response)
			})
	}
}
