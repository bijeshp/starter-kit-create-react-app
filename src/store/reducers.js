// @flow
import { combineReducers } from 'redux';

// Import All Reducers to be combined at the app Level- Root Reducer
import EditorReducer from '../modules/editor/reducer';

export default combineReducers({
	Editor: EditorReducer,
});
