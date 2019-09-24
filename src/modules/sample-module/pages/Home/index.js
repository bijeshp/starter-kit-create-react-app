//  @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

// Component Imports
import Button from '../../../../components/Button';

type Props = {};

type State = {};

class SampleModuleHome extends React.PureComponent<Props, State> {
	state = {};

	componentWillMount() {}

	render() {
		return (
			<section className="page sample-module-home">
				<h1> Sample  Home</h1>
				<Button />
			</section>
		);
	}
}
// Mapping Props and State.
const _SampleModuleHome = connect(
	(state) => ({}),
	(dispatch) => bindActionCreators({ ...Actions }, dispatch),
)(SampleModuleHome);

export { _SampleModuleHome as SampleModuleHome };
