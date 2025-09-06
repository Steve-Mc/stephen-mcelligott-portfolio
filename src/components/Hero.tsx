import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);

const Hero: React.FC = () => {
  return (
    <MotionStack
      align="start"
      maxW="30vw"
      initial={{ y: -100, opacity: 0, filter: "drop-shadow(0 0 0px teal)" }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      }}
      gap={2}
    >
      {/* Name */}
      <Text fontSize="2xl">
        <Text as="span" color="gray.500">
          Stephen{" "}
        </Text>
        <Text as="span" color="blue.500">
          McElligott,
        </Text>
      </Text>

      {/* Role */}
      <Text fontSize="2xl" mb={4} color="gray.500">
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
  );
};

export default Hero;
