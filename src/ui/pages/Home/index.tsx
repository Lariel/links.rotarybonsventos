import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { VerticalLinksStyled } from './styles';
import icon_instagram from '@assets/icon_instagram.svg';
import icon_linkedin from '@assets/icon_linkedin.svg';
import icon_mail from '@assets/icon_mail.svg';
import { linkList } from '@app/model/Links';

export default function Home() {

	useEffect(() => {
		console.log('Start Home');

		return () => {
			console.log('Exit Home');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='page-links'>
				<VerticalLinksStyled>
					{linkList.map(link => (
						link.label && <Link key={link.id} className='vertical-link' to={link.value}>{link.label}</Link>
					))}
					<div className='social-links structure-mobile'>
						<a href={linkList[0].value} target='_blank'>
							<img
								className='instagram-icon'
								src={icon_instagram}
								alt={linkList[0].description} />
						</a>

						<a href={linkList[1].value} target='_blank'>
							<img
								className='linkedin-icon'
								src={icon_linkedin}
								alt={linkList[1].description} />
						</a>

						<a href={linkList[2].value}>
							<img
								className='email-icon'
								src={icon_mail} alt={linkList[2].description} />
						</a>

					</div>
				</VerticalLinksStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
