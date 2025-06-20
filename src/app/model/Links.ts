export interface ILink {
	id: number,
	isActive: boolean,
	label?: string,
	value: string,
	description?: string
}

export const linkListDefault: ILink[] = [
	{
		id: 0,
		isActive: true,
		value: 'https://www.instagram.com/rotarybonsventos',
		label: '',
		description: 'Acesse nosso Instagram'
	},
	{
		id: 0,
		isActive: true,
		value: 'https://www.linkedin.com/company/rotary-club-de-osorio-bons-ventos',
		label: '',
		description: 'Acesse nosso LinkedIn'
	},
	{
		id: 0,
		isActive: true,
		value: 'mailto:rotarybonsventos@gmail.com',
		label: '',
		description: 'Envie um e-mail'
	}
]
