//  @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

// Component Imports
import Button from '../../../../components/Button';

type Props = {};

type State = {};

class EditorHome extends React.PureComponent<Props, State> {
	state = {};

	componentWillMount() {}

	render() {
		return (
			<section className="page editor-home">
				<h1> Editor Home</h1>
				<Button />
			</section>
		);
	}
}
// Mapping Props and State.
const _EditorHome = connect(
	(state) => ({}),
	(dispatch) => bindActionCreators({ ...Actions }, dispatch),
)(EditorHome);

export { _EditorHome as EditorHome };
