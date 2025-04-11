import {tokens} from './rimac-tokens';
import {themes} from './rimac-themes';
import {allFonts} from './rimac-fonts';

export const configWithoutAnimations = {
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: true,
    disableSSR: true,
    onlyAllowShorthands: true,
    themes,
    tokens,
    defaultFont: 'body',
    fonts: allFonts,
    settings: {
        fastSchemeChange: true,
    },
};
