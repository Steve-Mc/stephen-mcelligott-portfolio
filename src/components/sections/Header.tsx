import React from "react";
import { Box, Flex, IconButton, Spacer, Image } from "@chakra-ui/react";
import { TiAdjustBrightness } from "react-icons/ti";
import darkSrc from "@/assets/smcDarkLogo.png";
import lightSrc from "@/assets/smcLightLogo.png";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const MotionImage = motion(Image);

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const src: string = theme === "dark" ? darkSrc : lightSrc;
  return (
    <>
      <Box display="none">
        <Image src={darkSrc} alt="preload dark logo" />
        <Image src={lightSrc} alt="preload light logo" />
      </Box>
      <Flex as="header" p={4} mb={8} bg="headerBg" align="center">
        <MotionImage
          src={src}
          alt="SMC Logo"
          boxSize="50px"
          filter={theme === "dark" ? "invert(1)" : "invert(0)"}
          initial={{ y: -100, opacity: 0, filter: "drop-shadow(0 0 0px teal)" }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.6,
          }}
          whileHover={{
            scale: 1.1,
            rotate: -10,
            filter: "drop-shadow(0 0 12px teal)",
            transition: { type: "spring", stiffness: 400, damping: 20 },
          }}
          onClick={() => {
            console.log("add code here to go home");
          }}
        />
        <Spacer />
        <IconButton
          variant={"ghost"}
          aria-label="Toggle Theme"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <TiAdjustBrightness />
        </IconButton>
      </Flex>
    </>
  );
};
