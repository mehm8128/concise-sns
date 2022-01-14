import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

const Div = styled.div`
	margin-top: 8px;
`
const Post: React.VFC = () => {
	const [name, setName] = useState("")

	function PostUser() {
		axios
			.post("https://heroku-practice8128.herokuapp.com/create", { Name: name })
			.then((res) => {
				alert(res.data.Name + "の登録ができました")
				setName("")
			})
			.catch((err) => alert(err))
	}
	return (
		<Div>
			ユーザー登録
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={PostUser}>登録</button>
		</Div>
	)
}

export default Post
