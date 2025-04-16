import {YStack, Text, Image, View, styled, Button, Square, XStack} from 'tamagui';
import ScreenContainer from '@/components/ScreenContainer';
import {RimacTheme} from '@/components/BrandTheme';
import {RideFaceLight} from '@/components/ui/rimacIcons';
import {ShapeableButton} from '@/components/ui/ShapeableButton';

const HeaderImage = styled(Image, {
    marginTop: '$size.padding36',
});

const HeaderText = styled(Text, {
    fontFamily: '$heading',
    fontSize: '$medium',
    theme: 'header',
    marginTop: '$size.padding16',
    textAlign: 'center',
});

const HighlightedSubtext = styled(Text, {
    fontSize: '$font.heading1',
    theme: 'headerhighlighted',
});

const AnimatedSquare = styled(Square, {
    animation: ['slow', 'bouncy'],
    enterStyle: {
        transform: [{rotate: '0deg'}],
    },
    transform: [{rotate: '180deg'}],
});

export default function HomeScreen() {
    return (
        <RimacTheme>
            <ScreenContainer>
                <YStack
                    flex={1}
                    padding="$size.padding36"
                    alignContent="space-between"
                    justifyContent="space-between"
                >
                    <XStack gap="$size.padding16">
                        <AnimatedSquare
                            backgroundColor="$color.redBase"
                            width={100}
                            height={100}
                        />
                        <Square
                            animation="slow"
                            backgroundColor="$color.blueBase"
                            width={100}
                            height={100}
                            enterStyle={{opacity: 0}}
                        />
                    </XStack>
                    <View alignItems="center">
                        <HeaderImage source={RideFaceLight} />
                        <HeaderText>
                            Inicia tu próxima sesión con tu
                            <HighlightedSubtext> Face ID</HighlightedSubtext>
                        </HeaderText>
                    </View>
                    <View gap="$size.padding8">
                        <ShapeableButton
                            shape="roundBottom"
                            fontStyle="small"
                        >
                            Continuar
                        </ShapeableButton>
                        <Button backgroundColor="$color.blueBase">Continuar</Button>
                    </View>
                </YStack>
            </ScreenContainer>
        </RimacTheme>
    );
}
