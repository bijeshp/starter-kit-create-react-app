//@flow
import { SampleModuleHome } from './index';

export const SampleModuleRoutes = [
	{ path: '/', component: SampleModuleHome, exact: true },
	{ path: '/home', component: SampleModuleHome, exact: true },
];
