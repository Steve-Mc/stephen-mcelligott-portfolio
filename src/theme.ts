import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    body: {
      backgroundImage: `linear-gradient(
      90deg,
      rgba(89, 88, 88, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(rgba(89, 88, 88, 0.05) 1px, transparent 1px)`,
      backgroundSize: "15px 15px",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
