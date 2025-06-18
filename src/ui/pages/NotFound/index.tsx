import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { PageStyled } from './styles';

export default function NotFound() {

	useEffect(() => {
		console.log('Start NotFound');

		return () => {
			console.log('Exit NotFound');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
					Página não encontrada!!
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
