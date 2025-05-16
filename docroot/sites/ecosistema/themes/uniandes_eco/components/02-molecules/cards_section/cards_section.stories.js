/* eslint-disable */
import cardSectionTpl from './cards_section.twig';
import demoData       from './cards_section.yml';

import codeExampleTpl from './cards_section-code-example.twig';
import codeDemoData   from './_cards_section-code-example.yml';

import './cards_section.js';


/**
 * Este componente es una Sección de Tarjetas.
 * Utiliza js para la interacción.
 */
export default {
  title: 'Molecules/Cards/Section',
  argTypes: {},
  args: {}
};

/**
 * Seccion de Tarjetas.
 */
export const Section = () => cardSectionTpl( demoData );

/**
 * Ejemplo de uso del componente.
 */
export const CardSectionExample = () => codeExampleTpl(codeDemoData);
CardSectionExample.storyName = 'Section Example';
