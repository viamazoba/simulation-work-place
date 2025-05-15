/* eslint-disable */
import colors from './colors.twig';
import colorsData from './colorsPract.yml';

/**
 * Colores de la paleta de colores del proyecto.
 * Se pueden usar en cualquier parte del proyecto.
 * Se recomienda usar los colores de la paleta para mantener la coherencia visual en todo el proyecto.
 *
 * | Class  | Color |
 * |-------------|----------|
 * |  bg-primary-black    |   1E1E1E   |
 * |  bg-secondary-yellow  |  FFE41E  |
 * |  bg-tertiary-gray  |   BAB9B3 |
 * |  bg-background-white  |   FCFCFA |
 * |  bg-auxiliary-gray  |   73726D |
 * 
 *
 */

export default {
  title: 'Base/Colors',
};

export const Colors = () => colors(colorsData);
