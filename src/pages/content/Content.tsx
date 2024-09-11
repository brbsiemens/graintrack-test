import {useAuth} from '../../shared/hooks/useAuth'

export function Content() {
	const {logout} = useAuth()
	logout()
	return <div className='h-screen flex justify-center items-center'>Hello World!</div>
}
