import {themes as baseTheme} from '@tamagui/config/v4';
import {colors, accentColors, lightColors, darkColors, lightPalette, darkPalette} from './rimac-colors';

export const dark = {
    // Agrego los colores para que puedan ser usados directamente, muchos componentes lo necesitan asi
    ...darkColors,
    background: colors.darkPurple,
    color: colors.carrotOrange,
    // make new color similar in hex values to carrotOrange but depending on the button states colorHover, colorPress, colorFocus
    colorHover: '#E28B08',
    colorPress: '#FAA82D',
    colorFocus: '#FA7A2A',

    brandColor: colors.pistachio,
    bannerGradient: darkPalette,
};

type BaseTheme = typeof dark;

export const light: BaseTheme = {
    // Agrego los colores para que puedan ser usados directamente, muchos componentes lo necesitan asi
    ...lightColors,
    background: colors.eggshell,
    color: colors.darkPurple,
    colorHover: '#A23B72',
    colorPress: '#C73E1D',
    colorFocus: '#F18F01',

    brandColor: colors.teaGreen,
    bannerGradient: lightPalette,
};

// Helper function to convert back to array when needed
export const getBannerGradient = (theme: BaseTheme) => theme.bannerGradient;

const dark_rimac = {
    ...baseTheme.dark,
    ...dark,
    color: accentColors.redBase,
};

const light_rimac = {
    ...baseTheme.light,
    ...light,
    color: accentColors.redPastel,
};

const dark_estarbien = {
    ...baseTheme.dark,
    ...dark,
    background: colors.darkGreen,
    color: accentColors.turquoiseBase,
};

const light_estarbien = {
    ...baseTheme.light,
    ...light,
    color: accentColors.turquoisePastel,
};

const dark_rimac_Button = {
    ...baseTheme.dark,
    ...dark_rimac,
    background: accentColors.turquoiseVibrant,
    backgroundColor: accentColors.turquoiseVibrant,
    color: colors.black,
};

const light_rimac_Button = {
    ...baseTheme.light,
    ...light_rimac,
    background: accentColors.purpleDark,
    backgroundColor: accentColors.purpleDark,
};

const dark_estarbien_Button = {
    ...baseTheme.dark,
    ...dark_estarbien,
    backgroundColor: accentColors.turquoisePastel,
};

const light_estarbien_Button = {
    ...baseTheme.light,
    ...light_estarbien,
    backgroundColor: accentColors.purpleDark,
};

const dark_header = {
    ...baseTheme.dark,
    ...dark,
    color: colors.white,
};

const light_header = {
    ...baseTheme.light,
    ...light,
    color: colors.black,
};

const dark_headerhighlighted = {
    ...dark_header,
    color: colors.yellowVibrant,
};

const light_headerhighlighted = {
    ...light_header,
    color: colors.redVibrant,
};
const allThemes = {
    dark,
    light,
    dark_rimac,
    light_rimac,
    dark_estarbien,
    light_estarbien,
    dark_header,
    light_header,
    dark_headerhighlighted,
    light_headerhighlighted,
    dark_rimac_Button,
    light_rimac_Button,
    dark_estarbien_Button,
    light_estarbien_Button,
};

type ThemeName = keyof typeof allThemes;
type Themes = {
    [key in ThemeName]: BaseTheme;
};

export const themes: Themes = allThemes;
