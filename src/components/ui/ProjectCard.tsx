import { Card, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

// let chakra infer the type
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
      borderRadius="xl"
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)", // subtle soft shadow
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <Image src={image} alt={title} borderTopRadius={"xl"} />
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
