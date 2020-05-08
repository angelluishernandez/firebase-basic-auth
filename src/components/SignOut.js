import React from "react";
import { Link } from "react-router-dom";
import { auth } from "firebase";
import { history } from "../App";

const SignOut = () => {
	const signOut = () => {
		auth()
			.signOut()
			.then(() => history.push("/"));
	};

	return (
		<div>
			<button onClick={signOut}>log out</button>
		</div>
	);
};

export default SignOut;
