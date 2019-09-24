// @flow

import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

import { SAMPLE_ACTION } from '../actions/action.types';

import { sampleActionSuccess, sampleActionFailure } from '../actions';

function* sampleAction(action: Object) {
	try {
		yield put(sampleActionSuccess('Sample Data'));
	} catch (error) {
		yield put(sampleActionFailure(error));
	}
}

// Setup the Watcher Saga
export default function* SampleModuleSaga(): Generator<*, *, *> {
	yield takeLatest(SAMPLE_ACTION, sampleAction);
}
