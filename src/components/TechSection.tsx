// src/components/TechSection.tsx
import { Box, Text, Flex, HStack, Card, Avatar } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { Tech } from "@/types/tech";

const MotionCard = motion(Card.Root);

interface TechSectionProps {
  title: string;
  techs: Tech[];
}

export const TechSection: React.FC<TechSectionProps> = ({ title, techs }) => (
  <Box borderTop="1px solid" borderTopColor="rgba(255, 255, 255, 0.1)" pb={4}>
    <Text textAlign="start" pt={4} color="gray.500">
      {title}
    </Text>
    <Flex wrap="wrap" gap="12px">
      {techs.map((tech: Tech) => (
        <MotionCard
          key={tech.title}
          w="200px"
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.95,
            filter: "drop-shadow(0 0 0px teal)",
          }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          whileHover={{
            scale: 1.1,
            filter: "drop-shadow(0 0 12px teal)",
            transition: { type: "spring", stiffness: 400, damping: 20 },
          }}
        >
          <Card.Body gap={2}>
            <HStack>
              <Avatar.Root>
                <Avatar.Image src={typeof tech.icon === "string" ? tech.icon : undefined} />
              </Avatar.Root>
              <Card.Description cursor="default">{tech.title}</Card.Description>
            </HStack>
          </Card.Body>
        </MotionCard>
      ))}
    </Flex>
  </Box>
);
