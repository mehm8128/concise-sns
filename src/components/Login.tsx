import axios from 'axios'

const Login: React.VFC = () => {
	function login() {
		axios
			.get("https://concise-sns.herokuapp.com/login")
			.then((res) => console.log(res))
	}
	function secret() {
		axios
			.get("https://concise-sns.herokuapp.com/secret")
			.then((res) => console.log(res))
	}
	function logout() {
		axios
			.get("https://concise-sns.herokuapp.com/logout")
			.then((res) => console.log(res))
	}
	return (
		<div>
			<button onClick={login}>ログイン</button>
			<button onClick={secret}>secret</button>
			<button onClick={logout}>ログアウト</button>
		</div>
	)
}
export default Login
