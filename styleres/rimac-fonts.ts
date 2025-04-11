import {createFont, isAndroid} from '@tamagui/core';

// default for non-button fonts
const BOOK_WEIGHT = '400';
const MEDIUM_WEIGHT = '500';

const defaultWeights = {
    book: BOOK_WEIGHT,
    true: BOOK_WEIGHT,
    medium: MEDIUM_WEIGHT,
};
// on native, the Basel font files render down a few px
// this adjusts them to be visually centered by default
export const NATIVE_LINE_HEIGHT_SCALE = 1.15;

const fontFamilyByPlatform = {
    android: {
        book: 'SpaceMono-Regular',
        medium: 'Underdog-Regular',
    },
    ios: {
        book: 'Space Mono',
        medium: 'Underdog',
    },
};

const platform = isAndroid ? 'android' : 'ios';

const fontFamily = {
    sansSerif: {
        // iOS uses the embedded font family name, Android uses the file name
        book: fontFamilyByPlatform[platform].book,
        medium: fontFamilyByPlatform[platform].medium,
    },
};

type SansSerifFontFamilyKey = keyof typeof fontFamily.sansSerif;
type SansSerifFontFamilyValue = (typeof fontFamily.sansSerif)[SansSerifFontFamilyKey];

function platformFontFamily(family: SansSerifFontFamilyKey): SansSerifFontFamilyKey | SansSerifFontFamilyValue {
    return fontFamily.sansSerif[family];
}

export const fonts = {
    heading1: {
        family: platformFontFamily('book'),
        fontSize: 52,
        lineHeight: 60,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.2,
    },
    heading2: {
        family: platformFontFamily('book'),
        fontSize: 36,
        lineHeight: 44,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.2,
    },
    heading3: {
        family: platformFontFamily('medium'),
        fontSize: 24,
        lineHeight: 32,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.2,
    },
    subheading1: {
        family: platformFontFamily('medium'),
        fontSize: 18,
        lineHeight: 24,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.4,
    },
    subheading2: {
        family: platformFontFamily('medium'),
        fontSize: 16,
        lineHeight: 24,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.4,
    },
    body1: {
        family: platformFontFamily('book'),
        fontSize: 18,
        lineHeight: 24,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.4,
    },
    body2: {
        family: platformFontFamily('book'),
        fontSize: 16,
        lineHeight: 24,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.4,
    },
    body3: {
        family: platformFontFamily('book'),
        fontSize: 14,
        lineHeight: 20,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.4,
    },
    body4: {
        family: platformFontFamily('book'),
        fontSize: 12,
        lineHeight: 16,
        fontWeight: BOOK_WEIGHT,
        maxFontSizeMultiplier: 1.4,
    },
};

const face = {
    '100': {normal: fontFamily.sansSerif['book']},
    '300': {normal: fontFamily.sansSerif['book'], italic: fontFamily.sansSerif['book']},
    '400': {
        normal: fontFamily.sansSerif['book'],
        italic: fontFamily.sansSerif['book'],
    },
    '500': {normal: fontFamily.sansSerif['medium']},
    '700': {normal: fontFamily.sansSerif['medium']},
    '900': {normal: fontFamily.sansSerif['medium']},

    [defaultWeights.book]: {normal: fontFamily.sansSerif['book']},
    [defaultWeights.medium]: {normal: fontFamily.sansSerif['medium']},
};

export const headingFont = createFont({
    family: fontFamily.sansSerif['medium'],
    face,
    size: {
        '1': fonts.heading3.fontSize,
        small: fonts.heading3.fontSize,
        medium: fonts.heading2.fontSize,
        true: fonts.heading3.fontSize,
        large: fonts.heading1.fontSize,
    },
    weight: defaultWeights,
    lineHeight: {
        small: fonts.heading3.lineHeight,
        medium: fonts.heading2.lineHeight,
        true: fonts.heading3.lineHeight,
        large: fonts.heading1.lineHeight,
    },
});

export const subHeadingFont = createFont({
    family: fontFamily.sansSerif['book'],
    face,
    size: {
        '1': fonts.subheading2.fontSize,
        small: fonts.subheading2.fontSize,
        large: fonts.subheading1.fontSize,
        true: fonts.subheading1.fontSize,
    },
    weight: defaultWeights,
    lineHeight: {
        small: fonts.subheading2.lineHeight,
        large: fonts.subheading1.lineHeight,
        true: fonts.subheading1.lineHeight,
    },
});

export const bodyFont = createFont({
    family: fontFamily.sansSerif['book'],
    face,
    size: {
        '1': fonts.body4.fontSize,
        micro: fonts.body4.fontSize,
        small: fonts.body3.fontSize,
        medium: fonts.body2.fontSize,
        true: fonts.body2.fontSize,
        large: fonts.body1.fontSize,
    },
    weight: defaultWeights,
    lineHeight: {
        micro: fonts.body4.lineHeight,
        small: fonts.body3.lineHeight,
        medium: fonts.body2.lineHeight,
        true: fonts.body2.lineHeight,
        large: fonts.body1.lineHeight,
    },
});

// Tamagui SOLO reconoce estos tipos de keys (heading, subHeading, body), por lo que para usar directamente hay que usar estos, despues se manejan con weight y size
export const allFonts = {
    heading: headingFont,
    subHeading: subHeadingFont,
    body: bodyFont,
};
// https://tamagui.dev/docs/core/configuration#font-tokens
