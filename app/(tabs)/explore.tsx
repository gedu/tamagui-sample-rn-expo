import {EstarBienTheme} from '@/components/BrandTheme';
import ScreenContainer from '@/components/ScreenContainer';
import {YStack, Card, XStack, Paragraph, Image, Button, useTheme, Spacer, View} from 'tamagui';
import {LinearGradient} from '@tamagui/linear-gradient';
import type {LinearGradientExtraProps} from '@tamagui/linear-gradient';
import {X} from '@tamagui/lucide-icons';
import {BannerPhoto} from '@/components/ui/rimacIcons';

type GradientCardProps = Pick<LinearGradientExtraProps, 'colors'>;

function GradientCard({colors}: {colors: string[]}) {
    return (
        <Card elevate>
            <LinearGradient
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderRadius="$size.padding8"
            >
                <XStack
                    margin="$size.padding8"
                    gap="$size.padding8"
                >
                    <Image source={BannerPhoto} />
                    <View flex={1}>
                        <Paragraph
                            fontFamily="$body"
                            fontSize="$small"
                            wordWrap="break-word"
                        >
                            Dana si ahorras s/159 al mes, ganas s/6000 al mes en 9 años con Vida Ahorro con Devolucion
                        </Paragraph>
                    </View>
                    <Button
                        size="$1"
                        icon={X}
                        circular
                        color="$black"
                    />
                </XStack>
            </LinearGradient>
        </Card>
    );
}

export default function TabTwoScreen() {
    const theme = useTheme();

    return (
        <EstarBienTheme>
            <ScreenContainer>
                <YStack
                    flex={1}
                    justifyContent="center"
                >
                    <GradientCard colors={theme.bannerGradient?.val} />
                    <Spacer />
                    <GradientCard colors={['$purpleBase', '$blueBase']} />
                    <Spacer />
                    <GradientCard colors={['$bannerStart', '$bannerEnd']} />
                </YStack>
            </ScreenContainer>
        </EstarBienTheme>
    );
}
