import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri";
import { toast } from "react-hot-toast";
import "@/css/animations.css";
import { MotionStack, MotionFlex, MotionButton } from "@/components/ui/motion";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactDialog } from "@/components/ui/ContactDialog";

export const Hero: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useContactForm();

  const sendMessageHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent!", {
          style: { background: "#3182ce", color: "#ffffff", borderRadius: "10px", padding: "16px" },
          position: "bottom-center",
          icon: "🚀",
        });
        form.resetForm();
        setOpen(false);
      } else {
        toast.error("Error: " + data.error, {
          style: { background: "#e53e3e", color: "#ffffff", borderRadius: "10px", padding: "16px" },
          position: "bottom-center",
          icon: "❌",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Error", {
        style: { background: "#e53e3e", color: "#ffffff", borderRadius: "10px", padding: "16px" },
        position: "bottom-center",
        icon: "❌",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} maxW="80vw" gap={10}>
      <MotionStack
        align="start"
        maxW="30vw"
        initial={{ x: -500, opacity: 0, filter: "drop-shadow(0 0 0px teal)" }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        gap={2}
      >
        <Text textAlign="start" fontSize="2xl">
          <Text as="span" color="gray.500">
            Stephen{" "}
          </Text>
          <Text as="span" color="blue.500">
            McElligott,
          </Text>
        </Text>
        <Text textAlign="start" fontSize="2xl" mb={4} color="gray.500">
          Full Stack Developer
        </Text>
        <Text textAlign="start" color="gray.500">
          As a full-stack Javascript developer I build modern web apps with tools like{" "}
          <Text as="span" color="blue.500">
            React
          </Text>
          ,{" "}
          <Text as="span" color="blue.500">
            Node
          </Text>
          ,{" "}
          <Text as="span" color="blue.500">
            MySQL
          </Text>{" "}
          and{" "}
          <Text as="span" color="blue.500">
            Express
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
          x: { type: "spring", duration: 2, ease: "easeOut" },
          opacity: { duration: 0.5 },
        }}
      >
        <MotionButton
          bgColor="blue.600"
          color="white"
          borderRadius="xl"
          px={6}
          py={4}
          fontSize="md"
          fontWeight="semibold"
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileTap={{ y: 1 }}
          whileHover={{
            boxShadow: "0 8px 20px rgba(37, 99, 235, 0.35)",
            backgroundColor: "blue.700",
          }}
          onClick={() => setOpen(true)}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Get in touch <RiMailLine style={{ display: "inline-block", marginLeft: "0.5em" }} />
            </>
          )}
        </MotionButton>
      </MotionFlex>

      <ContactDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        form={form}
        loading={loading}
        onSubmit={sendMessageHandler}
      />
    </Flex>
  );
};

export default Hero;
