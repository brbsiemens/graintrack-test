// src/core/useAuth.ts
import {useEffect, useState} from 'react'
import {authService} from '../../core/auth/auth.service'
import {Subscription} from 'rxjs'

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [error, setError] = useState('')

	const login = (username: string, password: string) => {
		setError('')
		authService.login(username, password).subscribe({
			next: success => {
				if (!success) {
					setError('Неверные логин или пароль')
				}
			},
			error: () => {
				setError('Ошибка при авторизации')
			},
		})
	}

	const logout = () => {
		authService.logout()
	}

	useEffect(() => {
		const subscription: Subscription = authService.isAuthenticated().subscribe(auth => {
			setIsAuthenticated(auth)
		})

		return () => subscription.unsubscribe()
	}, [])

	return {
		isAuthenticated,
		error,
		login,
		logout,
	}
}
