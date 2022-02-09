import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

const List = styled.li`
	width: 500px;
	border: 1px solid black;
	margin-top: 8px;
`
const Span = styled.span`
	display: block;
`
type PostType = {
	ID: number
	CreatedAt: string
	UpdatedAt: string
	DeletedAt: string
	name: string
	content: string
}

type PostProps = {
	post: PostType
	getPosts: () => void
}
type DeleteRequest = {
	id: number
	password: string
}

const Post: React.VFC<PostProps> = ({ post, getPosts }) => {
	const [password, setPassword] = useState("")

	function deletePost() {
		if (password !== "") {
			const data: DeleteRequest = {
				id: post.ID,
				password: password,
			}
			axios
				.post("https://concise-sns.herokuapp.com/delete", data)
				.then((res) => {
					getPosts()
					setPassword("")
				})
				.catch((err) => alert("パスワードが違います"))
		}
	}

	function formatter(time: string) {
		return (
			time.split("T")[0].split("-")[0] +
			"/" +
			time.split("T")[0].split("-")[1] +
			"/" +
			time.split("T")[0].split("-")[2] +
			" " +
			time.split("T")[1].split(".")[0]
		)
	}
	return (
		<List key={post.ID}>
			<Span>ID：{post.ID}</Span>
			<Span>名前：{post.name}</Span>
			<Span>投稿：{post.content}</Span>
			<Span>作成日時：{formatter(post.CreatedAt)}</Span>
			<Span>更新日時：{formatter(post.UpdatedAt)}</Span>
			<Span>
				削除(削除用パスワードを入力してください)：
				<input
					type="text"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={deletePost}>削除</button>
			</Span>
		</List>
	)
}
export default Post
