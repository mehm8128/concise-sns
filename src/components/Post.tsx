import axios from "axios"
import { useState } from "react"

const Post: React.VFC = () => {
	const [name, setName] = useState("")

	function PostUser() {
		axios
			.post("https://heroku-practice8128.herokuapp.com/create")
			.then((res) => {
				alert(res.data.Name + "の登録ができました")
			})
			.catch((err) => alert(err))
	}
	return (
		<div className="Post">
			ユーザー登録
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={PostUser}>登録</button>
		</div>
	)
}

export default Post
