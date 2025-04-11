import {Button, styled} from 'tamagui';

export const ShapeableButton = styled(Button, {
    variants: {
        fontStyle: {
            small: {
                fontWeight: '400',
                fontSize: 10,
            },
            medium: {
                fontSize: 28,
            },
            big: {
                fontWeight: '500',
                fontSize: 24,
            },
        },
        shape: {
            // All corners rounded
            round: {
                borderRadius: '$size.padding8',
            },
            // Only top corners rounded
            roundTop: {
                borderTopLeftRadius: '$size.padding8',
                borderTopRightRadius: '$size.padding8',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
            },
            // Only bottom corners rounded
            roundBottom: {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: '$size.padding8',
                borderBottomRightRadius: '$size.padding8',
            },
            // Only left corners rounded
            roundLeft: {
                borderTopLeftRadius: '$size.padding8',
                borderBottomLeftRadius: '$size.padding8',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            },
            // Only right corners rounded
            roundRight: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: '$size.padding8',
                borderBottomRightRadius: '$size.padding8',
            },
            // No corners rounded (square)
            square: {
                borderRadius: 0,
            },
        },
    } as const,
    defaultVariants: {
        shape: 'round',
        fontStyle: 'medium',
    },
});

export type ShapeableButtonProps = React.ComponentProps<typeof ShapeableButton>;
