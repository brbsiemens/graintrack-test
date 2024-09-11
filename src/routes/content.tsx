import {createFileRoute} from '@tanstack/react-router'
import {Content} from '../pages/content/Content'

export const Route = createFileRoute('/content')({
	component: Content,
})
