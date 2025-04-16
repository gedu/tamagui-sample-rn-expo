import {createTamagui, getConfig} from 'tamagui';
import {configWithoutAnimations} from './styleres/rimac-config';
import {animations} from './styleres/rimac-animations';

export const config = createTamagui({
    animations,
    ...configWithoutAnimations,
});

// in other files use this:
console.log(`config is`, getConfig().fonts);

// get typescript types on @tamagui/core imports:
type AppConfig = typeof config;
declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends AppConfig {}
}
