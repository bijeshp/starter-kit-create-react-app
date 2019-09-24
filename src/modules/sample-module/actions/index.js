// @flow
import * as ActionTypes from './action.types';

export const sampleAction = (data: Object) => ({
	type: ActionTypes.SAMPLE_ACTION,
	payload: data,
});

export const sampleActionSuccess = (data: Object) => ({
	type: ActionTypes.SAMPLE_ACTION_SUCCESS,
	payload: data,
});

export const sampleActionFailure = (error: Object) => ({
	type: ActionTypes.SAMPLE_ACTION_FAILURE,
	payload: error,
});
