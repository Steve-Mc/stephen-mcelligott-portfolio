// src/components/Layout.tsx

import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />

      <Box as="main" p={4} flex="1">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
