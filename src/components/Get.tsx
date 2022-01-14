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
type PostType = {
	ID: number
	CreatedAt: string
	UpdatedAt: string
	DeletedAt: string
	Name: string
	Content: string
}
type GetProps = {
	posts: PostType[]
}

const Get: React.VFC<GetProps> = ({ posts }) => {
	return (
		<Div>
			<OrderedList>
				{posts.map((post) => (
					<List key={post.ID}>
						<Span>ID：{post.ID}</Span>
						<Span>名前：{post.Name}</Span>
						<Span>投稿：{post.Content}</Span>
						<Span>作成日時：{post.CreatedAt}</Span>
						<Span>更新日時：{post.UpdatedAt}</Span>
					</List>
				))}
			</OrderedList>
		</Div>
	)
}

export default Get
