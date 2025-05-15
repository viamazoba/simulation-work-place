/* eslint-disable */
import cardC from './card.twig';
import data from './card.yml';

import cardE from './card-code-example.twig';
import cardEData from './_card-code-example.yml';

/**
 * Componente de tarjeta que muestra una imagen, un título, un texto y dos botones.
 * Hay 3 tipos de tarjetas:
 * - 1: Tarjeta con dos botones
 * - 2: Tarjeta con un botón
 * - 3: Tarjeta sin botones
 *
 */

export default {
  title: 'Molecules/Cards/Card',
  argTypes: {
    card_var_arg: {
      name: 'card_var',
      type: 'select',
      options: ['card_var_1', 'card_var_2', 'card_var_3'],
      description:
        'Esta variable establece la clase del texto dentro del componente. Se pueden usar las clases personalizadas de **card_var_1, card_var_2 o card_var_3**.',
      table: {
        defaultValue: { summary: 'card_var_1' },
      },
    },
    title_arg: {
      name: 'card_title',
      description: 'Variable que establece el título dentro del componente',
      table: {
        defaultValue: { summary: 'Titulo de la card' },
      },
    },
    text_arg: {
      name: 'card_text',
      description: 'Variable que establece el texto dentro del componente',
      table: {
        defaultValue: {
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, congue vel laoreet ac.',
        },
      },
    },
    img_arg: {
      name: 'card_img',
      description: 'Variable que establece la imagen dentro del componente',
      table: {
        defaultValue: { summary: 'Enlace de Imagen' },
      },
    },
    img_alt_arg: {
      name: 'card_img_alt',
      description:
        'Variable que establece el texto alternativo de la imagen dentro del componente',
      table: {
        defaultValue: { summary: 'Texto alternativo de la imagen' },
      },
    },
    primary_id_arg: {
      name: 'card_primary_id',
      description:
        'Variable que establece el id del botón primario dentro del componente',
      table: {
        defaultValue: { summary: 'card_primary_id_1' },
      },
    },
    primary_text_arg: {
      name: 'card_primary_text',
      description:
        'Variable que establece el texto del botón primario dentro del componente',
      table: {
        defaultValue: { summary: 'Aceptar' },
      },
    },
    secondary_id_arg: {
      name: 'card_secondary_id',
      description:
        'Variable que establece el id del botón secundario dentro del componente',
      table: {
        defaultValue: { summary: 'card_secondary_id_1' },
      },
    },
    secondary_text_arg: {
      name: 'card_secondary_text',
      description:
        'Variable que establece el texto del botón secundario dentro del componente',
      table: {
        defaultValue: { summary: 'Cancelar' },
      },
    },
  },
  args: {
    card_var_arg: data.card_var,
    title_arg: data.card_title,
    text_arg: data.card_text,
    img_arg: data.card_img,
    img_alt_arg: data.card_img_alt,
    primary_id_arg: data.card_primary_id,
    primary_text_arg: data.card_primary_text,
    secondary_id_arg: data.card_secondary_id,
    secondary_text_arg: data.card_secondary_text,
  },
};

/**
 * Historia individual de variante de Card 1:
 */
export const Card = ({
  card_var_arg,
  title_arg,
  text_arg,
  img_arg,
  img_alt_arg,
  primary_id_arg,
  primary_text_arg,
  secondary_id_arg,
  secondary_text_arg,
}) =>
  cardC({
    card_var: card_var_arg,
    card_title: title_arg,
    card_text: text_arg,
    card_img: img_arg,
    card_img_alt: img_alt_arg,
    card_primary_id: primary_id_arg,
    card_primary_text: primary_text_arg,
    card_secondary_id: secondary_id_arg,
    card_secondary_text: secondary_text_arg,
  });
Card.storyName = 'Variante de Card 1';

/**
 * Historia individual de variante de Card 2:
 */
export const variant2Card = () =>
  cardC({
    card_var: 'card_var_2',
    card_title: 'Titulo de la card',
    card_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, congue vel laoreet ac.',
    card_img:
      'https://cdn.pixabay.com/photo/2018/08/01/06/43/girl-3576679_640.jpg',
    card_img_alt: 'Texto alternativo de la imagen',
    card_primary_id: 'card_primary_id_1',
    card_primary_text: 'Aceptar',
  });
variant2Card.storyName = 'Variante de Card 2';

/**
 * Historia Individual de variante de Card 3:
 */
export const variant3Card = () =>
  cardC({
    card_var: 'card_var_3',
    card_title: 'Titulo de la card',
    card_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, congue vel laoreet ac.',
    card_img:
      'https://cdn.pixabay.com/photo/2018/08/01/06/43/girl-3576679_640.jpg',
    card_img_alt: 'Texto alternativo de la imagen',
  });
variant3Card.storyName = 'Variante de Card 3';


/**
 * El bloque muestra un ejemplo de cómo utilizar el componente card en el proyecto:
 */
export const cardExample = () => cardE(cardEData);
