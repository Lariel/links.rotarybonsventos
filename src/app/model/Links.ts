interface Link {
	id: number,
	isActive: boolean,
	label?: string,
	value: string,
	description?: string
}

export const linkList: Link[] = [
	{
		id: 0,
		isActive: true,
		value: 'https://www.instagram.com/rotarybonsventos',
		description: 'Acesse nosso Instagram'
	},
	{
		id: 1,
		isActive: true,
		value: 'https://www.linkedin.com/company/rotary-club-de-osorio-bons-ventos',
		description: 'Acesse nosso LinkedIn'
	},
	{
		id: 2,
		isActive: true,
		value: 'mailto:rotarybonsventos@gmail.com',
		description: 'Envie um e-mail'
	},
	{
		id: 3,
		isActive: true,
		label: 'Contribua',
		value: 'https://www.rotarybonsventos.org.br/contribua',
		description: ''
	},
	{
		id: 4,
		isActive: true,
		label: 'Projetos',
		value: 'https://www.rotarybonsventos.org.br/projetos',
		description: 'Conheça nossos projetos'
	},
	{
		id: 5,
		isActive: true,
		label: 'Fale Conosco',
		value: 'https://www.rotarybonsventos.org.br/contato',
		description: 'Conheça mais formas de entrar em contato'
	}
]
