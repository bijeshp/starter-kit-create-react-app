// @flow
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ExcludedRoutes from '../config/ExcludedRoutes';

const isAuthenticated = (store: any, props: any) => {
	const currentPath = props.match.path;
	if (currentPath === '/home' || ExcludedRoutes.indexOf(currentPath) >= 0) return true;
	return false;
};

const AuthenticatedRoute = ({ component: Component, store, ...rest }: any) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return isAuthenticated(store, props) ? (
					<Component {...props} />
				) : (
					<Redirect to="/home" />
				);
			}}
		/>
	);
};

export default AuthenticatedRoute;
