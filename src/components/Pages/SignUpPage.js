import React, { useState } from "react";
import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { history } from "../../App";

const SignUpPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		console.log(email, password, "=> submit");
		e.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				if (history.location.pathname === "/signup") {
					history.push("/");
				}
				console.log("entra", userAuth);
			})
			.catch((error) => {
				setError(error.message);

				console.log(error.message);
			});
	};

	const handleSocialLogin = () => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then((authUser) => {
				console.log(authUser, "login successful");
				history.push("/");
			})
			.catch((error) => console.log(error.message));
	};

	console.log(email, password);

	return (
		<div>
			{error ? <h1>{error}</h1> : null}
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
			<button onClick={handleSocialLogin}>Sign up with Google</button>
		</div>
	);
};

export default SignUpPage;
