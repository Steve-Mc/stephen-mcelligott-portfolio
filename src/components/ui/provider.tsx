// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { ColorModeProvider } from "./color-mode";
import { system } from "@/theme";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" defaultTheme={"system"}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
