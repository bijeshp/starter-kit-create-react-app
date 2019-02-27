// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

type Props = {
	children: React.Node,
	location: Location,
	history: Object,
};

type State = {
	bootUpCompleted: boolean,
};

class Bootstrap extends React.PureComponent<Props, State> {
	state = {
		bootUpCompleted: true,
	};

	attachInterceptor() {
		axios.interceptors.response.use(
			(response) => {
				if (response.config.url.indexOf('/logout') >= 0 && response.status === 200) {
					this.props.history.push('/login');
				}
				return response;
			},
			(error) => {
				if (
					(error.request.responseURL.indexOf('/ping') >= 0 &&
						error.response.data.error.name === 'JsonWebTokenError') ||
					error.response.status === 401
				) {
					this.props.history.push('/login');
				}
				return Promise.reject(error);
			},
		);
	}

	componentWillMount() {
		this.attachInterceptor();
	}

	componentWillReceiveProps(nextProps) {}

	render() {
		return (
			<div className={`boot-strap`}>
				{/* <Header
					{...this.props}
					notifications={this.props.bootupInfo.userNotifications}
					userDetails={this.props.bootupInfo.userDetails}
					logout={this.props.logout}
				/>
				{navStyle === 'nav-left' ? (
					<NavigationMenu apps={this.props.bootupInfo.userApps} />
				) : null} */}
				<main className="main-container">
					<div className="content-loader">{this.props.children}</div>
				</main>
			</div>
		);
	}
}

Bootstrap.contextTypes = {
	router: PropTypes.object,
};

export default withRouter(
	connect(
		(state) => ({ bootupInfo: { ...state.bootupInfo } }),
		(dispatch) => bindActionCreators({}, dispatch),
	)(Bootstrap),
);
