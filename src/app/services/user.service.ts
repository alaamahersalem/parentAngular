import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private http: HttpClient) {}
	private loginUrl: string = 'https://reqres.in/api/login';
	private usersListUrl: string = 'https://reqres.in/api/users';
	// private usersDetailsUrl: string = 'https://reqres.in/api/users/2';

	userLogin(email, password) {
		return this.http.post(this.loginUrl, {
			email,
			password
		});
	}
	deleteUser(id) {
		var url = `https://reqres.in/api/users/${id}`;
		debugger;
		return this.http.delete(url);
	}
	getUsers() {
		return this.http.get(this.usersListUrl);
	}
	userDetails(id) {
		var url = `https://reqres.in/api/users/${id}`;
		return this.http.get(url);
	}
}
