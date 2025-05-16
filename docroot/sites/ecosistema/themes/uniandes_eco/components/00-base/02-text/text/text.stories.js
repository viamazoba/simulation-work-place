/* eslint-disable */
import textC from './text.twig';
import data from './text.yml';

import textE from './text-code-example.twig';
import dataE from './_text-code-example.yml';
/**
 * Estilos de tipo de texto, incluyendo body-text, sub-title y button-text.
 * Se pueden usar en cualquier parte del proyecto. 
 * Se recomienda usar body-text para el texto normal, sub-title para subtítulos y button-text para botones.
 */
export default {
  title: 'Base/Text/Text',
  argTypes: {
    classT: {
      name: 'text_class',
      description:
        'Esta variable establece la clase del texto dentro del componente. Se pueden usar las clases personalizadas de **body-text, sub-title o button-text**.',
      table: {
        defaultValue: { summary: 'body-text' },
      },
    },
    text: {
      name: 'text_content',
      description: 'Variable que establece el texto dentro del componente',
      table: {
        defaultValue: { summary: 'Texto de Prueba' },
      },
    },
  },
  args: {
    classT: data.text_class,
    text: data.text_content,
  },
};

export const text = ({ classT, text }) =>
  textC({
    text_class: classT,
    text_content: text,
  });

/**
 * El bloque que se muestra a continuación contiene un ejemplo de cómo utilizar el componente text en el proyecto:
 */

export const textExample = () => textE(dataE);
