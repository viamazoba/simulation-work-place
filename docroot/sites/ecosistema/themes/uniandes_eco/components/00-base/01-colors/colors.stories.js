/* eslint-disable */
import colors from './colors.twig';


import colorsData from './colors.yml';

export default {
  title: 'Base/Colors',
};

export const Main = () => colors(colorsData);
