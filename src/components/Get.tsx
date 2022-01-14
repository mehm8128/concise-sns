import axios from "axios"
import { useEffect, useState } from "react"

type User = {
	ID: number
	CreatedAt: string
	UpdatedAt: string
	DeletedAt: string
	Name: string
}
const Get: React.VFC = () => {
	const [users, setUsers] = useState(new Array<User>())

	useEffect(() => {
		axios
			.get("https://heroku-practice8128.herokuapp.com/users")
			.then((res) => {
				setUsers(res.data)
			})
			.catch((err) => alert(err))
	})
	return (
		<div className="Get">
			<ol>
				{users.map((user) => (
					<li key={user.ID}>
						ID：{user.ID}
						名前：{user.Name}
						作成日時：{user.CreatedAt}
						更新日時：{user.UpdatedAt}
					</li>
				))}
			</ol>
		</div>
	)
}

export default Get
