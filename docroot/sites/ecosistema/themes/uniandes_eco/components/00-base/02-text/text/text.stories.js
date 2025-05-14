/* eslint-disable */
import textC from './text.twig';
import data from './text.yml';
import textE from './text-code-example.twig'
import dataE from './_text-code-example.yml'
/**
 * Los componentes encontrados en esta sección están referidos a la tipografía que se define en el sistema de diseño tanto  al nivel de headings y textos que se pueden encontrar en diferentes partes del body como links, labels, párrafos. etc. Por todo lo anterior, se definen dos componentes una llamado **heading** y otro denominado **text**.
 * 
 * En esta sección se trata el componente para los diferentes textos, **excluyendo los títulos**, por tanto a continuación se describen las variables del componente y una breve descripción:
 * 
 * > **Nota importante:** En figma la variable para la clase del componente **(text_class)** aparece como **ss3-dsp-body-lg-400** (dps: desktop), pero en la implementación se omite el dispositivo **(dsp,tbt, mbl)** como se muestra en los ejemplos que se presentan más abajo.
 */
export default {
	title: 'Base/Text/Text',
	argTypes: {
		classT: {
			name: 'text_class',
			type: 'string',
			description: 'Esta es la variable definida en figma para el texto utilizado, ejemplo: **ss3-body-lg-400** o **scp-body-lg-400**.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'ss3-body-lg-400' },
			}
		},
		text: {
			name: 'text_content',
			type: 'string',
			description: 'Variable que establece el texto dentro del componente',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Este es el texto' },
			}
		}
	},
	args: {
		classT: data.text_class,
		text: data.text_content
	}
};

export const text = ({ classT, text }) => textC({
	text_class: classT,
	text_content: text,
});

text.parameters = {
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
 * El bloque que se muestra a continuación contiene un ejemplo de cómo utilizar el componente text en el proyecto:
 */

export const textExample = () => textE(dataE);