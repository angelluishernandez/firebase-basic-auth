import React, { useState } from "react";
import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { history } from "../../App";

const SingInPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				history.push("/");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const handleSocialLogin = () => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then((authUser) => {
				console.log(authUser);

				history.push("/dashboard");
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">SignIn</button>
			</form>
			<hr />
			<button onClick={handleSocialLogin}>Login with Google</button>
		</div>
	);
};

export default SingInPage;
