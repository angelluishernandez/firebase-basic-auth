import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Route, Router, Switch } from "react-router-dom";
import SingInPage from "./components/Pages/SignInPage";
import SignUpPage from "./components/Pages/SignUpPage";
import { createBrowserHistory } from "history";
import Dashboard from "./components/Pages/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { auth } from "firebase";

export const history = createBrowserHistory();

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		auth().onAuthStateChanged((user) => {
			if (user) {
				setAuthenticated(true);
				setLoading(false);
			} else {
				setAuthenticated(false);
				setLoading(false);
			}
		});
	});

	return loading ? (
		<h1>Loading...</h1>
	) : (
		<Router history={history}>
			<div className="App">
				<Switch>
					<PublicRoute
						exact
						path="/"
						component={Home}
						authenticated={authenticated}
					/>
					<PublicRoute
						exact
						path="/signin"
						component={SingInPage}
						authenticated={authenticated}
					/>
					<PublicRoute
						exact
						path="/signup"
						component={SignUpPage}
						authenticated={authenticated}
					/>
					<PrivateRoute
						exact
						path="/dashboard"
						component={Dashboard}
						authenticated={authenticated}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
