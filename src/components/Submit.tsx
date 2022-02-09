import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
	margin-top: 8px;
`
const Textarea = styled.textarea`
	resize: none;
`
const Label = styled.label``

type postData = {
	name: string
	content: string
	password: string
}
type SubmitProps = {
	getPosts: () => void
}

const Submit: React.VFC<SubmitProps> = ({ getPosts }) => {
	const [name, setName] = useState("")
	const [content, setContent] = useState("")
	const [password, setPassword] = useState("")

	function PostUser() {
		if (content !== "") {
			const data: postData = {
				name: name,
				content: content,
				password: password,
			}
			axios
				.post("https://concise-sns.herokuapp.com/post", data)
				.then((res) => {
					getPosts()
					setName("")
					setContent("")
					setPassword("")
				})
				.catch((err) => alert(err))
		}
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
				内容(必須)
				<Textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</Label>
			<br />
			<Label>
				削除用パスワード
				<input
					type="text"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Label>
			<br />
			<button onClick={PostUser}>登録</button>
		</Div>
	)
}

export default Submit
