import React from "react";
import SignIn from "./SingIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import { Route, Link } from "react-router-dom";
import SingInPage from "./Pages/SignInPage";

const Home = () => {
	console.log("entra");
	return (
		<div>
			<SignIn />
			<SignUp />
			<button>SignOut</button>
		</div>
	);
};

export default Home;
