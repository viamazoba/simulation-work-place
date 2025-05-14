// Buttons Stories
/* eslint-disable */
import buttonC from './button.twig';
import buttonExampleC from './button-code-example.twig'


// Aquí se importan los YML
import buttonData from './button.yml';
import buttonExampleData from './_button-code-example.yml'

/**
 * En esta sección se resume la información del componente botón, por tanto se debe tener en cuenta que este componente tiene tres variaciones y tamaños:
 * 
 * | Variaciones  | Tamaños |
 * |-------------|----------|
 * |  primary    |   large   |
 * |  secondary  |  medium  |
 * |  tertiary  |   small |
 * 
 *
 */

export default {
  title: 'Atoms/Button',
  argTypes: {
    id: {
      name: 'id',
      type: 'string',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
      }
    },
    classB: {
      name: 'button_base_class',
      type: 'string',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'valor por defecto' },
      }
    },
    textB: {
      name: 'button_text',
      type: 'string',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Más programas' },
      }
    },
    aria_label: {
      name: 'aria_label',
      type: 'string',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Más programas' },
      }
    },
    href: {
      name: 'href',
      type: 'string',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      }
    },
    target: {
      name: 'target',
      type: 'string',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      }
    },
    rightI: {
      name: 'iconRight',
      type: 'boolean',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    leftI: {
      name: 'iconLeft',
      description: 'Esta es la descripción del controlador',
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    darkC: {
      name: 'dark',
      type: 'boolean',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    fullC: {
      name: 'full',
      type: 'boolean',
      description: 'Esta es la descripción del controlador',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
  },
  args: {
    id: buttonData.id,
    classB: buttonData.button_base_class,
    textB: buttonData.button_text,
    aria_label: buttonData.aria_label,
    href: buttonData.href,
    target: buttonData.target,
    rightI: buttonData.iconRight,
    leftI: buttonData.iconLeft,
    darkC: buttonData.dark,
    fullC: buttonData.full
  }
};

/**
 * Este es el texto que se muestra en el ejemplo:
 */

export const primaryButton = ({
  id,
  classB,
  textB,
  aria_label,
  href,
  target,
  rightI,
  leftI,
  darkC,
  fullC
}) => buttonC({
  id: id,
  button_base_class: classB,
  button_text: textB,
  aria_label: aria_label,
  href: href,
  target: target,
  iconRight: rightI,
  iconLeft: leftI,
  dark: darkC,
  full: fullC
});

primaryButton.parameters = {
  design: [
    {
      name: 'figma button',
      type: 'figma',
      url: 'https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?node-id=619%3A3508&mode=dev',
      allowFullscreen: true,
    },
    {
      name: "Complete figma",
      type: "link",
      url: "https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?node-id=20%3A2&mode=dev",
    }
  ]
};

