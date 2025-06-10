import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { routes } from './routes';
import { Loader } from '@ui/components/Loader';

const Home = lazy(() => import('@ui/pages/Home'));
const NotFound = lazy(() => import('@ui/pages/NotFound'));

export function Router() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path={routes.home.path} element={<Home />} />
				<Route path={routes.notFound.path} element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
