import React from "react";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiMailLine } from "react-icons/ri";

const MotionStack = motion(Stack);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

const Hero: React.FC = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} maxW="80vw" gap={10}>
      <MotionStack
        align="start"
        maxW="30vw"
        initial={{ x: -500, opacity: 0, filter: "drop-shadow(0 0 0px teal)" }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2,
        }}
        gap={2}
      >
        {/* Name */}
        <Text textAlign={"start"} fontSize="2xl">
          <Text as="span" color="gray.500">
            Stephen{" "}
          </Text>
          <Text as="span" color="blue.500">
            McElligott,
          </Text>
        </Text>

        {/* Role */}
        <Text textAlign={"start"} fontSize="2xl" mb={4} color="gray.500">
          Full Stack Developer
        </Text>

        {/* Technologies */}
        <Text textAlign="start" color="gray.500">
          As a full-stack Javascript developer I build modern web apps with tools like{" "}
          <Text as="span" color="blue.500">
            React.js
          </Text>
          ,{" "}
          <Text as="span" color="blue.500">
            Node.js
          </Text>{" "}
          and{" "}
          <Text as="span" color="blue.500">
            Express.js
          </Text>
          .
        </Text>
      </MotionStack>
      <MotionFlex
        maxW={{ base: "100%", md: "50%" }}
        w="100%"
        align="center"
        justify={{ base: "center", md: "flex-end" }}
        initial={{ x: 500, opacity: 0, filter: "drop-shadow(0 0 0px teal)" }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          x: { type: "tween", duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.5 },
        }}
      >
        <MotionButton
          bgColor="blue.500"
          color="white"
          borderRadius="xl"
          px={6}
          py={4}
          fontSize="md"
          fontWeight="bold"
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(66, 153, 225, 0.6)",
          }}
          initial={{ opacity: 1, filter: "drop-shadow(0 0 0px teal)" }}
        >
          Get in touch <RiMailLine />
        </MotionButton>
      </MotionFlex>
    </Flex>
  );
};

export default Hero;
