import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Div = styled.div`
	display: flex;
	justify-content: center;
`
const OrderedList = styled.ol`
	list-style: none;
`
const List = styled.li`
	width: 500px;
	border: 1px solid black;
	margin-top: 8px;
`
const Span = styled.span`
	display: block;
`
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
			.get("https://heroku-practice8128.herokuapp.com/get")
			.then((res) => {
				setUsers(res.data)
			})
			.catch((err) => alert(err))
	}, [])
	return (
		<Div>
			<OrderedList>
				{users.map((user) => (
					<List key={user.ID}>
						<Span>ID：{user.ID}</Span>
						<Span>名前：{user.Name}</Span>
						<Span>作成日時：{user.CreatedAt}</Span>
						<Span>更新日時：{user.UpdatedAt}</Span>
					</List>
				))}
			</OrderedList>
		</Div>
	)
}

export default Get
