import {FC, ButtonHTMLAttributes} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({children, ...props}) => (
	<button
		className='bg-blue-500 text-white p-2 rounded border border-black'
		{...props}>
		{children}
	</button>
)
