import { HeaderContainerStyled, HeaderContentStyled } from './styles';
import logo_white from '@assets/logo_white.png';

export function Header() {

	return (
			<HeaderContainerStyled className='container'>
				<HeaderContentStyled className='structure'>
					<img src={logo_white} className='logo-header' alt='Logo Rotary Bons Ventos Header'/>
				</HeaderContentStyled>
			</HeaderContainerStyled>
	);
}
