import React from "react";
import { auth } from "firebase";
import { history } from "../../App";

const Dashboard = () => {
	const doSignOut = () => {
		auth()
			.signOut()
			.then(() => history.push("/"));
	};
	return (
		<div>
			<h1>Hola</h1>
			<button onClick={doSignOut}>Sign out</button>
		</div>
	);
};
export default Dashboard;
