// src/components/Technologies.tsx
import { Box, Heading, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TechSection } from "./TechSection";
import { backendTech } from "@/data/backendTech__temp";
import { frontendTech } from "@/data/frontendTech__temp";
import { utilitiesTech } from "@/data/utilitiesTech";

const MotionStack = motion(Stack);

export const Technologies: React.FC = () => (
  <MotionStack
    gap={16}
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.1 }}
  >
    <Box>
      <Heading textAlign="start" pb={4} color="gray.500">
        TECHNOLOGIES
      </Heading>

      <TechSection title="Backend" techs={backendTech} />
      <TechSection title="Frontend" techs={frontendTech} />
      <TechSection title="Utilities" techs={utilitiesTech} />
    </Box>
  </MotionStack>
);
