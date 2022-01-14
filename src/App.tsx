import Get from "./components/Get"
import Post from "./components/Post"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"

const Div = styled.div`
	text-align: center;
`

type PostType = {
	ID: number
	CreatedAt: string
	UpdatedAt: string
	DeletedAt: string
	Name: string
	Content: string
}
const App: React.VFC = () => {
	const [posts, setPosts] = useState(new Array<PostType>())

	function GetPosts() {
		axios
			.get("https://heroku-practice8128.herokuapp.com/get")
			.then((res) => {
				setPosts(res.data.reverse())
			})
			.catch((err) => alert(err))
	}
	useEffect(() => {
		axios
			.get("https://heroku-practice8128.herokuapp.com/get")
			.then((res) => {
				setPosts(res.data.reverse())
			})
			.catch((err) => alert(err))
	}, [])

	return (
		<Div>
			<Post getPosts={GetPosts} />
			<Get posts={posts} />
		</Div>
	)
}

export default App
