import styled from 'styled-components'

import Post from './Post'

const Div = styled.div`
	display: flex;
	justify-content: center;
`
const OrderedList = styled.ol`
	list-style: none;
`
type PostType = {
	ID: number
	CreatedAt: string
	UpdatedAt: string
	DeletedAt: string
	name: string
	content: string
}

type ListProps = {
	posts: PostType[]
	getPosts: () => void
}

const List: React.VFC<ListProps> = ({ posts, getPosts }) => {
	return (
		<Div>
			<OrderedList>
				{posts.map((post) => (
					<Post post={post} getPosts={getPosts} />
				))}
			</OrderedList>
		</Div>
	)
}

export default List
