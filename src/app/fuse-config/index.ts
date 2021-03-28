import { FuseConfig } from '@fuse/types';

/**
 * Default Fuse Configuration
 *
 * You can edit these options to change the default options. All these options also can be
 * changed per component basis. See `app/main/pages/authentication/login/login.component.ts`
 * constructor method to learn more about changing these options per component basis.
 */

export const fuseConfig: FuseConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme      : 'theme-default',
    customScrollbars: true,
    layout          : {
        style    : 'horizontal-layout-1',
        width    : 'fullwidth',
        navbar   : {
            primaryBackground  : 'grey-200',
            secondaryBackground: 'navy-dark-500',
            folded             : false,
            hidden             : false,
            position           : 'top',
            variant            : 'vertical-style-1'
        },
        toolbar  : {
            customBackgroundColor: false,
            background           : 'navy-dark-500',
            hidden               : false,
            position             : 'above'
        },
        footer   : {
            customBackgroundColor: true,
            background           : 'navy-dark-500',
            hidden               : true,
            position             : 'below-fixed'
        },
        sidepanel: {
            hidden  : false,
            position: 'right'
        }
    }
};
