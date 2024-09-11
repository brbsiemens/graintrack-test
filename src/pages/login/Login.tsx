import {useState} from 'react'
import {useAuth} from '../../shared/hooks/useAuth'
import {Button} from '../../shared/ui/Button'

import {useNavigate} from '@tanstack/react-router'

export const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const {login, isAuthenticated} = useAuth()
	const navigate = useNavigate({from: '/'})

	if (isAuthenticated) {
		return navigate({
			to: '/content',
		})
	}

	return (
		<div className='h-screen flex justify-center items-center'>
			<input
				className='p-2 border border-black m-2'
				placeholder='Username'
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<input
				className='p-2 border border-black m-2'
				type='password'
				placeholder='Password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Button onClick={() => login(username, password)}>Login</Button>
		</div>
	)
}
