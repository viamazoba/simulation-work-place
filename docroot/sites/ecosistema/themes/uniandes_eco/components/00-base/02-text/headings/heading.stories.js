/* eslint-disable */
import headingC from './heading.twig';
import data from './headingData.yml';
import headingE from './_heading-code-example.twig'
import dataE from './_heading-code-example.yml'
/**
 * Esto es un comentario
 */
export default {
	title: 'Base/Text/Heading',
	argTypes: {
		class_heading: {
			name: 'heading_class',
			type: 'string',
			description: 'Esta es la variable definida en figma para el heading utilizado, ejemplo: **ss3-title-700**',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'ss3-title-700' },
			}
		},
		text: {
			name: 'heading_text',
			type: 'string',
			description: 'Variable que establece el texto dentro del componente',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Este es un título' },
			}
		},
		level: {
			name: 'heading_level',
			type: 'select',
			description: 'Esta variable define el nivel de la etiqueta **h**, por ejemplo un **heading_level** de **1** hace referencia a un **h1**.',
			options: [1, 2, 3, 4, 5, 6],
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 2 },
			}
		}
	},
	args: {
		class_heading: data.heading_class,
		text: data.heading_text,
		level: data.heading_level
	}
};

export const heading = ({ class_heading, text, level }) => headingC({
	heading_class: class_heading,
	heading_text: text,
	heading_level: level
});

heading.parameters = {
	design: [
		{
			name: 'Source Sans 3',
			type: 'figma',
			url: 'https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?node-id=20%3A1278&mode=dev',
			allowFullscreen: true,
		},

	]

};

/**
 * El bloque que se muestra a continuación contiene un ejemplo de cómo utilizar el componente heading en el proyecto:
 */

export const headingExample = () => headingE(dataE);
