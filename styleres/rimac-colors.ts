// Colores Accent para resaltar, estos van a ser usados para dark/light theme y el token colors
export const accentColors = {
    redLight: '#FFF2F1',
    redPastel: '#FDCFC4',
    redBase: '#FF5F52',
    redVibrant: '#FF0000',
    redDark: '#220D0C',

    orangeLight: '#FEF5EA',
    orangePastel: '#FFE8BC',
    orangeBase: '#FF8934',
    orangeVibrant: '#FF4D00',
    orangeDark: '#371B0C',

    yellowLight: '#FFFE8B',
    yellowPastel: '#FFF8B4',
    yellowBase: '#FFBF17',
    yellowVibrant: '#FFF612',
    yellowDark: '#1F1E02',

    brownLight: '#F7F6F1',
    brownPastel: '#E2E0CD',
    brownBase: '#85754A',
    brownVibrant: '#996F01',
    brownDark: '#231E0F',

    greenLight: '#EEFBF1',
    greenPastel: '#C2E7D0',
    greenBase: '#0C8911',
    greenVibrant: '#21C95E',
    greenDark: '#0F2C1A',

    limeLight: '#F7FEEB',
    limePastel: '#E4F6C4',
    limeBase: '#78E744',
    limeVibrant: '#B1F13C',
    limeDark: '#232917',

    turquoiseLight: '#F7FEEB',
    turquoisePastel: '#CAFFDF',
    turquoiseBase: '#00C3A0',
    turquoiseVibrant: '#5CFE9D',
    turquoiseDark: '#1A2A21',

    cyanLight: '#EBF8FF',
    cyanPastel: '#B9E3F8',
    cyanBase: '#23A3FF',
    cyanVibrant: '#3ADCFF',
    cyanDark: '#15242B',

    blueLight: '#EFF4FF',
    bluePastel: '#D0D9F8',
    blueBase: '#4981FF',
    blueVibrant: '#0047FF',
    blueDark: '#10143D',

    purpleLight: '#FAF5FF',
    purplePastel: '#E9D8FD',
    purpleBase: '#9E62FF',
    purpleVibrant: '#4300B0',
    purpleDark: '#1A0040',
};

// Para los gradientes
export const lightPalette = [accentColors.blueLight, accentColors.bluePastel, accentColors.blueBase, accentColors.purpleLight, accentColors.purplePastel];
export const darkPalette = [accentColors.blueDark, accentColors.purpleDark, accentColors.purpleVibrant, accentColors.blueVibrant, accentColors.blueBase];

// Colores base, estos van a ser usados para dark/light theme y el token colors
export const colors = {
    black: '#000',
    white: '#fff',
    eggshell: '#FAF3DD',
    bluencs: '#2E86AB',
    magenta: '#A23B72',
    carrotOrange: '#F18F01',
    sinopia: '#C73E1D',
    darkPurple: '#3B1F2B',
    pistachio: '#90BE6D',
    teaGreen: '#C9E3AC',
    darkGreen: '#002626',

    ...accentColors,
};

// Colores para el tema light
export const lightColors = {
    ...accentColors,
    ...colors,
    background: '#FFFFFF',
    text: '#000000',
    primary: accentColors.blueBase,
    secondary: accentColors.turquoiseBase,
    success: accentColors.greenBase,
    warning: accentColors.yellowBase,
    error: accentColors.redBase,
    info: accentColors.cyanBase,
    surface: '#FFFFFF',
    surfaceVariant: '#F5F5F5',
    outline: '#E0E0E0',
    disabled: '#BDBDBD',
    bannerStart: accentColors.limeBase,
    bannerEnd: accentColors.limeDark,
};

// Colores para el tema dark
export const darkColors = {
    ...accentColors,
    ...colors,
    background: '#121212',
    text: '#FFFFFF',
    primary: accentColors.blueVibrant,
    secondary: accentColors.turquoiseVibrant,
    success: accentColors.greenVibrant,
    warning: accentColors.yellowVibrant,
    error: accentColors.redVibrant,
    info: accentColors.cyanVibrant,
    surface: '#121212',
    surfaceVariant: '#2C2C2C',
    outline: '#3F3F3F',
    disabled: '#666666',
    bannerStart: accentColors.orangeBase,
    bannerEnd: accentColors.orangeDark,
};
