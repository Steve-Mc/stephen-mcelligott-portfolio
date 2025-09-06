// components/ProjectCard.tsx
import { Card, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

const MotionCard = motion(Card.Root);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, url }) => {
  return (
    <MotionCard
      maxW="100%"
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
        filter: "drop-shadow(0 0 0px teal)",
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        filter: "drop-shadow(0 0 12px teal)",
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
    >
      <Image src={image} alt={title} />
      <Card.Body gap="2">
        <Card.Title cursor="default">{title}</Card.Title>
        <Card.Description cursor="default">{description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline" onClick={() => window.open(url, "_blank", "noopener,noreferrer")}>
          View <LuExternalLink />
        </Button>
      </Card.Footer>
    </MotionCard>
  );
};
