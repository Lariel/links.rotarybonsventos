import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { VerticalLinksStyled } from './styles';
import icon_instagram from '@assets/icon_instagram.svg';
import icon_linkedin from '@assets/icon_linkedin.svg';
import icon_mail from '@assets/icon_mail.svg';
import { links } from '@app/constants/constants';
import { Pages } from '@app/model/Pages';
import { getFeatures, validateFeature } from '@app/services/FeatureFlagService';

export default function Home() {

	useEffect(() => {
		console.log('Start Home');

		validateFeature(getFeatures().links.menu);

		return () => {
			console.log('Exit Home');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='page-links'>
				<VerticalLinksStyled>
					{getFeatures().contribute.menu && <Link className='vertical-link' to={links.rotarybonsventos + Pages.contribute.path}>{Pages.contribute.label}</Link>}
					{getFeatures().projects.menu && <Link className='vertical-link' to={links.rotarybonsventos + Pages.projects.path}>{Pages.projects.label}</Link>}
					{getFeatures().accountability.menu && <Link className='vertical-link' to={links.rotarybonsventos + Pages.contact.path}>{Pages.contact.description}</Link>}
					<div className='social-links structure-mobile'>
						<a href={links.instagram} target='_blank'>
							<img
								className='instagram-icon'
								src={icon_instagram}
								alt='Acesse nosso Instagram' />
						</a>

						<a href={links.linkedin} target='_blank'>
							<img
								className='linkedin-icon'
								src={icon_linkedin}
								alt='Acesse nosso LinkedIn' />
						</a>

						<a href={'mailto:'+links.email}>
							<img
								className='email-icon'
								src={icon_mail} alt='Envie um e-mail' />
						</a>

					</div>
				</VerticalLinksStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
