// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/
import logo from '../public/esinergia.png';

import { create } from '@storybook/theming';

export default create({
    base: 'light',
    // Branding
    brandTitle: 'Esinergia',
    brandImage: logo,
});
