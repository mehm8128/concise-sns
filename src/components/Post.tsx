import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

const Div = styled.div`
	margin-top: 8px;
`
const Textarea = styled.textarea`
	resize: none;
`
const Label = styled.label``
const Post: React.VFC = () => {
	const [name, setName] = useState("")
	const [content, setContent] = useState("")

	function PostUser() {
		axios
			.post("https://heroku-practice8128.herokuapp.com/post", { Name: name })
			.then((res) => {
				console.log(res.status)
				setName("")
				setContent("")
			})
			.catch((err) => alert(err))
	}
	return (
		<Div>
			投稿
			<br />
			<Label>
				ユーザー名
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</Label>
			<br />
			<Label>
				内容
				<Textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</Label>
			<br />
			<button onClick={PostUser}>登録</button>
		</Div>
	)
}

export default Post
