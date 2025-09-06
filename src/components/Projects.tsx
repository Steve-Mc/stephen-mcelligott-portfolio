import { Box, Heading, Flex, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types/project";
import { projects } from "@/data/projects";

const MotionStack = motion(Stack);

export const Projects: React.FC = () => {
  return (
    <MotionStack
      gap="16"
      initial={{ y: 100, opacity: 0, filter: "drop-shadow(0 0 0px teal)" }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <Box>
        <Heading textAlign="start" pb={4} color="gray.500">
          PROJECTS
        </Heading>

        <Box borderTop="1px solid" borderTopColor="rgba(255, 255, 255, 0.1)" pt={4}>
          <Flex wrap="wrap" gap="40px" justify={{ base: "center", md: "flex-start" }}>
            {projects.map((project: Project) => (
              <Box
                key={project.title}
                flex={{ base: "1 1 280px", md: "1 1 calc(50% - 20px)" }} // ensures min width
                maxW={{ base: "100%", md: "calc(50% - 20px)" }}
              >
                <ProjectCard {...project} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </MotionStack>
  );
};
