import { PropsWithChildren } from "react";
import { Theme } from "tamagui";
import { useColorScheme } from "@/hooks/useColorScheme";

export function SystemTheme({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  return (
    <Theme name={colorScheme === "dark" ? "dark" : "light"}>{children}</Theme>
  );
}

export function RimacTheme({ children }: PropsWithChildren) {
  return <Theme name="rimac">{children}</Theme>;
}

export function EstarBienTheme({ children }: PropsWithChildren) {
  return <Theme name="estarbien">{children}</Theme>;
}
