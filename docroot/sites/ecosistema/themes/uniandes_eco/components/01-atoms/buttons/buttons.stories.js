// Buttons Stories
/* eslint-disable */
import buttonC from './button.twig';
import buttonExampleC from './button-code-example.twig'


// Aquí se importan los YML
import buttonData from './button.yml';
import buttonSecondaryData from './secondary-button.yml';
import buttonTertiaryData from './tertiary-button.yml'
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
 * > **Nota aclaratoria:** Las columnas de la anterior tabla no tienen una relación única, solo es una forma de listar las variaciones y tamaños,
 * ya que un botón primary cuenta con los diferentes tamaños y no sólo con large.
 * 
 * Por lo anterior, se ha definido una variable que contiene las variables anteriores de la siguiente manera: **btn-[variación]-[tamaño]**, donde dicha variable se puede encontrar en figma. Ahora, este componente posee los siguientes modificadores que se especifican más abajo: **iconRight**, **iconLeft**, **full** y **dark**.
 * 
 * ### Link con estilos de botón
 * Este elemento también puede comportarse como un link, por esta razón posee los atributos **href** y **target**, pero sólo se comportará como un link si se establece **href** diferente de **none** así el componente pasará de ser un botón con etiqueta **button** a un botón con etiqueta **a** (un link).
 * 
 * > **Nota accesibilidad**: Para añadir accesibilidad a este átomo se ha dejado disponible el atributo **aria-label**, el cual si no es definido tomará por defecto el texto insertado para el botón.
 * 
 * 
 * > **Nota importante:** El dark mode que se muestra a continuación es simplemente una ayuda para visualizar el componente en este estado, pero en la práctica el botón cambia al dark mode automáticamente cuando  su contenedor padre contiene la clase **theme-dark**.
 */

export default {
  title: 'Atoms/Button',
  argTypes: {
    id: {
      name: 'id',
      type: 'string',
      description: 'Variable que define el id para buttons',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
      }
    },
    classB: {
      name: 'button_base_class',
      type: 'string',
      description: 'Esta es la variable definida en figma para el botón utilizado, ejemplo: **btn-primary-large**, **btn-secondary-small**, **btn-tertiary-medium**.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'btn-primary-large' },
      }
    },
    textB: {
      name: 'button_text',
      type: 'string',
      description: 'Variable que establece el texto dentro del componente',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Más programas' },
      }
    },
    aria_label: {
      name: 'aria_label',
      type: 'string',
      description: 'Variable que establece la descripción del componente para los **lectores de pantalla**',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Más programas' },
      }
    },
    href: {
      name: 'href',
      type: 'string',
      description: 'En este parámetro se coloca la url a la que se desea ir. Este parámetro al ser definido y ser diferente de **none** cambia la etiqueta de **button** a una etiqueta **a**.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      }
    },
    target: {
      name: 'target',
      type: 'string',
      description: 'En este parámetro permite elegir si la url desea abrirse en la misma ventana o en otra. Este parámetro sólo es válido cuando el **href** del botón es diferente de **none**.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      }
    },
    rightI: {
      name: 'iconRight',
      type: 'boolean',
      description: 'Esta variable establece el **icono derecho** en el botón.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    leftI: {
      name: 'iconLeft',
      description: 'Esta variable establece el **icono izquierdo** en el botón.',
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    darkC: {
      name: 'dark',
      type: 'boolean',
      description: 'Esta variable permite visualizar el **modo oscuro** del botón.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    fullC: {
      name: 'full',
      type: 'boolean',
      description: 'Esta variable permite que el botón tenga un **width del 100%**, esto se deja como comodin para futuros componentes.',
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
 * A continuación se muestra un botón primary **(btn-primary-large)** como ejemplo:
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


/**
 * A continuación se muestra un botón secondary **(btn-secondary-large)** como ejemplo:
 */
export const secondaryButton = () => buttonC(buttonSecondaryData);

/**
 * A continuación se muestra un botón primary **(btn-tertiary-large)** como ejemplo:
 */
export const tertiaryButton = () => buttonC(buttonTertiaryData);

/**
 * En el siguiente bloque se muestra el código necesario para implementar el componente botón:
 */

export const buttonExample = () => buttonExampleC(buttonExampleData)
