interface Link {
	id: number,
	label?: string,
	value: string,
	description?: string
}

export const linkList: Link[] = [
	{
		id: 0,
		value: 'https://www.instagram.com/rotarybonsventos',
		description: 'Acesse nosso Instagram'
	},
	{
		id: 1,
		value: 'https://www.linkedin.com/company/rotary-club-de-osorio-bons-ventos',
		description: 'Acesse nosso LinkedIn'
	},
	{
		id: 2,
		value: 'mailto:rotarybonsventos@gmail.com',
		description: 'Envie um e-mail'
	},
	{
		id: 3,
		label: 'Contribua',
		value: 'https://www.rotarybonsventos.org.br/contribua',
		description: ''
	},
	{
		id: 4,
		label: 'Projetos',
		value: 'https://www.rotarybonsventos.org.br/projetos',
		description: 'Conheça nossos projetos'
	},
	{
		id: 5,
		label: 'Fale Conosco',
		value: 'https://www.rotarybonsventos.org.br/contato',
		description: 'Conheça mais formas de entrar em contato'
	}
]
