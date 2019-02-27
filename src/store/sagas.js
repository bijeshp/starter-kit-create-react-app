import * as EditorSagas from '../modules/editor/sagas';

const sagas = {
	...EditorSagas,
};

// Run Sagas
export function registerWithMiddleware(middleware: { run: Function }) {
	for (let name in sagas) {
		middleware.run(sagas[name]);
	}
}
