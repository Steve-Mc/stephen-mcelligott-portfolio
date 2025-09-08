import { Flex, Text, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
const githubUrl = "https://github.com/Steve-Mc";
const linkedinUrl = "https://www.linkedin.com/in/stephen-mcelligott-b46b338a/";
export const Footer: React.FC = () => {
  return (
    <Flex as="header" p={4} mb={8} bg="headerBg" align="center" justify={"space-between"}>
      {" "}
      <Text fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} Stephen McElligott
      </Text>
      <HStack gap={4} mt={{ base: 2, md: 0 }}>
        <Link onClick={() => window.open(githubUrl, "_blank", "noopener,noreferrer")}>
          <FaGithub size={24} />
        </Link>
        <Link onClick={() => window.open(linkedinUrl, "_blank", "noopener,noreferrer")}>
          <FaLinkedin size={24} />
        </Link>
      </HStack>
    </Flex>
  );
};
