// @flow
import { combineReducers } from 'redux';

// Import All Reducers to be combined at the app Level- Root Reducer
import SampleModuleReducer from '../modules/sample-module/reducer';

export default combineReducers({
	Editor: SampleModuleReducer,
});
