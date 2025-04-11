import { YStack, View, styled } from "tamagui";

export const Container = styled(View, {
  flex: 1,
  backgroundColor: "$background",
});

export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <YStack flex={1} padding="$size.padding16">
        {children}
      </YStack>
    </Container>
  );
}
