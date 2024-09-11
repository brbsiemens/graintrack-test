// src/core/auth.service.ts
import {BehaviorSubject, of} from 'rxjs'
import {map} from 'rxjs/operators'

class AuthService {
	private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)

	login(username: string, password: string) {
		return of({success: username === '123' && password === '123'}).pipe(
			map(response => {
				if (response.success) {
					this.isAuthenticatedSubject.next(true)
				}
				return response.success
			}),
		)
	}

	isAuthenticated() {
		return this.isAuthenticatedSubject.asObservable()
	}

	logout() {
		this.isAuthenticatedSubject.next(false)
	}
}

export const authService = new AuthService()
