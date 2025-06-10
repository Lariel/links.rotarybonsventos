import { Header } from '@ui/components/Header'
import { GlobalStyles } from '@ui/styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom';
import { Router } from '@app/Router';

export function App() {

  return (
		<>
			<GlobalStyles />
			<Header />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
  )
}
