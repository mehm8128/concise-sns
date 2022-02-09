import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import List from './components/List'
import Submit from './components/Submit'

const Div = styled.div`
	text-align: center;
`

type PostType = {
	ID: number
	CreatedAt: string
	UpdatedAt: string
	DeletedAt: string
	name: string
	content: string
}
const App: React.VFC = () => {
	const [posts, setPosts] = useState(new Array<PostType>())

	function GetPosts() {
		axios
			.get("https://concise-sns.herokuapp.com/get")
			.then((res) => {
				setPosts(res.data)
			})
			.catch((err) => alert(err))
	}
	useEffect(() => {
		axios
			.get("https://concise-sns.herokuapp.com/get")
			.then((res) => {
				setPosts(res.data)
			})
			.catch((err) => alert(err))
	}, [])

	return (
		<Div>
			<Submit getPosts={GetPosts} />
			<List posts={posts} getPosts={GetPosts} />
		</Div>
	)
}

export default App
