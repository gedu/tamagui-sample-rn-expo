import {defaultConfig} from '@tamagui/config/v4';
import {createTokens} from 'tamagui';
import {padding, gap, spacing} from './rimac-spacing';
import {colors as color} from './rimac-colors';
import {fonts} from './rimac-fonts';

const iconSizes = {
    icon8: 8,
    icon12: 12,
    icon16: 16,
    icon18: 18,
    icon20: 20,
    icon24: 24,
    icon28: 28,
    icon32: 32,
    icon36: 36,
    icon40: 40,
    icon44: 44,
    icon48: 48,
    icon64: 64,
    icon70: 70,
    icon100: 100,
};

const space = {
    ...defaultConfig.tokens.size,
    ...spacing,
    ...padding,
    ...gap,
    true: spacing[44],
};

const size = space;

const iconSize = {
    true: iconSizes.icon40,
    8: iconSizes.icon8,
    12: iconSizes.icon12,
    16: iconSizes.icon16,
    18: iconSizes.icon18,
    20: iconSizes.icon20,
    24: iconSizes.icon24,
    28: iconSizes.icon28,
    36: iconSizes.icon36,
    40: iconSizes.icon40,
    48: iconSizes.icon48,
    64: iconSizes.icon64,
    70: iconSizes.icon70,
    100: iconSizes.icon100,
};

const fontSize = {
    heading1: fonts.heading1.fontSize,
    heading2: fonts.heading2.fontSize,
    heading3: fonts.heading3.fontSize,
    subheading1: fonts.subheading1.fontSize,
    subheading2: fonts.subheading2.fontSize,
    body1: fonts.body1.fontSize,
    body2: fonts.body2.fontSize,
    body3: fonts.body3.fontSize,
    true: fonts.body2.fontSize,
};

export const tokens = createTokens({
    ...defaultConfig.tokens,
    // Los colores no son necesarios ya que se manejan con el theme, pero si lo van a usar en Variants con spread, si es recomendable agregarlos
    // https://tamagui.dev/docs/core/variants#spread-variants
    color,
    size,
    iconSize,
    font: fontSize,
});
