import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "@/components/sections/Header";
import { Footer } from "../sections/Footer";

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
      <Footer />
    </Flex>
  );
};

export default Layout;
