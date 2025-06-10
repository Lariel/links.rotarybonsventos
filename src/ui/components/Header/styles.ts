import styled from 'styled-components';
import theme from '@ui/styles/theme';
import { maxWidthBreakpointDesktopHD, maxWidthBreakpointDesktopWXGA, maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';

export const HeaderContainerStyled = styled.header`

`;

export const HeaderContentStyled = styled.header`
	display: flex;
	height: 200px;
	background-color: ${theme.colorDefault};
	align-items: center;
	justify-content: center;
	img {
		height: 170px;
	}

	.logo-header {
		padding-right: 20px;
		margin-left: 73px;
		@media screen and (max-width: ${maxWidthBreakpointDesktopWXGA}) {
			margin-left: 10px;
		}
		@media screen and (max-width: ${maxWidthBreakpointDesktopHD}) {
			margin-left: 27px;
		}
	}

	@media screen and (min-width: ${maxWidthBreakpointMobile}) {
		height: 120px;
		justify-content: flex-start;
		img {
			height: 100px;
		}
	}

`;
