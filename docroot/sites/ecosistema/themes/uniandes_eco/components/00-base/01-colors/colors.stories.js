/* eslint-disable */
import colors from './colors.twig';
import dark from './dark.twig';
import light from './light.twig';
import ecosystem from './ecosystem.twig';

import colorsData from './colors.yml';
import darkColorsData from './darkColors.yml';
import lightColorsData from './lightColors.yml';
import ecosystemColorsData from './ecosystemColor.yml';

/**
 * Este componente permite visualizar las variables de colores definidas en colors-vars en este archivo se asigna un nombre descriptivo a cada color y se le asigna el valor hexadecimal `$uniandes-color-brand-black: #191916;`. Y en colors-used, se define el nombre con el que se va a utilizar  en el proyecto.
 *
 * Para aplicar las variables de color se utiliza la función **clr( )** seguido de la variable de uso del color por ejemplo:
 *
 * `background-color: clr(uniandes-color-brand-black);`
 */
export default {
  title: 'Base/Colors',
};

export const Main = () => colors(colorsData);
export const Dark = () => dark(darkColorsData);
export const Light = () => light(lightColorsData);


/**
  Nueva paleta de colores agregada para el micrositio "Ecosistema".
  Estos colores son específicos de este micrositio y se usan en elementos como texto, fondos e interacciones.
 */

export const EcosystemColors = () => ecosystem(ecosystemColorsData);
Dark.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?type=design&node-id=2212%3A9291&mode=dev',
    allowFullscreen: true,
  },
};

Light.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?type=design&node-id=2212%3A8847&mode=dev',
    allowFullscreen: true,
  },
};

Main.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UgzAMLwVO0sj6aCdDAonkA/ID-Uniandes-Implementaci%C3%B3n?type=design&node-id=2212%3A8847&mode=dev',
    allowFullscreen: true,
  },
};

EcosystemColors.parameters = {
  design: {
    type: 'link',
    url: 'https://www.figma.com/design/5dGeIi52tRdx6SYRrTr4ra/Web_Cotizar?node-id=202-42756&t=GqkEYdc01zDyFm3j-0',
    allowFullscreen: true,
  },
};
