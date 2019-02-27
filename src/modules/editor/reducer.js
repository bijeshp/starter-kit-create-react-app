// @flow
import * as Actions from './actions/action.types';

const initialState = {};

const EditorReducer = (state: Object = initialState, action: Object) => {
	switch (action.type) {
		case Actions.SAMPLE_ACTION: {
			let newState = { ...state, action: Actions.SAMPLE_ACTION };
			return newState;
		}
		default:
			return state;
	}
};

export default EditorReducer;
