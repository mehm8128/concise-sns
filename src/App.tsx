import "./App.css"
import Get from "./components/Get"
import Post from "./components/Post"

const App: React.VFC = () => {
	return (
		<div className="App">
			<Post />
			<Get />
		</div>
	)
}

export default App
