/* eslint-disable */
import headingC from './heading.twig';
import data from './headingData.yml';
import headingE from './_heading-code-example.twig'
import dataE from './_heading-code-example.yml'
/**
 * Los componentes encontrados en esta sección están referidos a la tipografía que se define en el sistema de diseño tanto  al nivel de headings y textos que se pueden encontrar
 * en diferentes partes del body como links, labels, párrafos. etc. Por todo lo anterior, se definen dos componentes una llamado **heading** y otro denominado **text**.
 * 
 * En esta sección se trata el componente para los títulos o headings, por tanto a continuación se describen las variables del componente y una breve descripción:
 * 
 * > **Nota importante:** En figma la variable para la clase del componente **(heading_class)** aparece como **ss3-dps-title-700** (dps: desktop), pero en la implementación se omite el dispositivo **(dsp,tbt, mbl)** como se muestra en los ejemplos que se presentan más abajo.
 */
export default {
	title: 'Base/Text/Heading',
	argTypes: {
		class_heading: {
			name: 'heading_class',
			type: 'string',
			description: 'Esta es la variable definida en figma para el heading utilizado, ejemplo: **ss3-title-700** o **ssf4-title-300**.',
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
		{
			name: 'Source Serif 4',
			type: 'figma',
			url: 'https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?node-id=20%3A5&mode=dev',
			allowFullscreen: true,
		},
		{
			name: 'Source Code Pro',
			type: 'figma',
			url: 'https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?node-id=20%3A206&mode=dev',
			allowFullscreen: true,
		},
		{
			name: "Complete figma",
			type: "link",
			url: "https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?node-id=20%3A2&mode=dev",
		}

	]

};

/**
 * El bloque que se muestra a continuación contiene un ejemplo de cómo utilizar el componente heading en el proyecto:
 */

export const headingExample = () => headingE(dataE);
