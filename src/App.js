//@flow
import * as React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import Bootstrap from './components/hoc/Bootstrap';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import { routes } from './routes';

import './App.scss';

type Props = {};
class _App extends React.Component<Props> {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Bootstrap>
						<Switch>
							{routes.map((item: any, index: string) => {
								return (
									<AuthenticatedRoute
										key={index}
										path={item.path}
										exact={item.exact}
										component={item.component}
										store={store}
									/>
								);
							})}
						</Switch>
					</Bootstrap>
				</BrowserRouter>
			</Provider>
		);
	}
}

export const App = _App;
