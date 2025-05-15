// Buttons Stories
/* eslint-disable */

import buttonC from './button.twig';
import buttonExampleC from './button-code-example.twig';

import data from './button.yml';
import buttonExampleData from './_button-code-example.yml';

/**
 *
 * Este componente cuenta con dos variaciones principales: primary y secondary.
 *
 * El color, bordes, tamaños y tipografía son definidos en el diseño.
 */

export default {
  title: 'Atoms/Buttons',
  argTypes: {
    id_arg: {
      name: 'button_id',
      description:
        'Variable que establece el id del botón dentro del componente',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    type_arg: {
      name: 'button_type',
      type: 'select',
      options: ['primary', 'secondary'],
      description:
        'Esta variable establece el tipo de botón dentro del componente. Se pueden usar las clases personalizadas de **primary o secondary**.',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    text_arg: {
      name: 'button_text',
      description: 'Variable que establece el texto dentro del componente',
      table: {
        defaultValue: { summary: 'Aceptar' },
      },
    },
  },
  args: {
    id_arg: data.button_id,
    type_arg: data.button_type,
    text_arg: data.button_text,
  },
};

/**
 * Historia individual para el botón primario:
 */
export const PrimaryButton = ({ id_arg, type_arg, text_arg }) => {
  return buttonC({
    button_id: id_arg,
    button_type: type_arg,
    button_text: text_arg,
  });
};
PrimaryButton.storyName = 'Primary';

/**
 * Historia individual para el botón secundario:
 */
export const SecondaryButton = () =>
  buttonC({
    button_id: '',
    button_type: 'secondary',
    button_text: 'Aceptar',
  });
SecondaryButton.storyName = 'Secondary';

/**
 * El bloque muestra un ejemplo de cómo utilizar el componente button en el proyecto:
 */

export const buttonExample = () => buttonExampleC(buttonExampleData);
