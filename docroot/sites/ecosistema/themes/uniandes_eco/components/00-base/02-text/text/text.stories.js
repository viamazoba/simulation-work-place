/* eslint-disable */
import textC from './text.twig';
import data from './text.yml';
import textE from './text-code-example.twig'
import dataE from './_text-code-example.yml'
/**
 * Este es un comentario
 */
export default {
	title: 'Base/Text/Text',
	argTypes: {
		classT: {
			name: 'text_class',
			type: 'string',
			description: 'Esta es la variable definida en figma para el texto utilizado, ejemplo: **ss3-body-lg-400**',
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


/**
 * El bloque que se muestra a continuación contiene un ejemplo de cómo utilizar el componente text en el proyecto:
 */

export const textExample = () => textE(dataE);