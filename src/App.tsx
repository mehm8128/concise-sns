import Get from "./components/Get"
import Post from "./components/Post"
import styled from "styled-components"

const Div = styled.div`
	text-align: center;
`
const App: React.VFC = () => {
	return (
		<Div>
			<Post />
			<Get />
		</Div>
	)
}

export default App
