import * as SampleModuleSagas from '../modules/sample-module/sagas';

const sagas = {
	...SampleModuleSagas,
};

// Run Sagas
export function registerWithMiddleware(middleware: { run: Function }) {
	for (let name in sagas) {
		middleware.run(sagas[name]);
	}
}
