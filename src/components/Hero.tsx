import React, { useState } from "react";
import {
  Button,
  Flex,
  Stack,
  Text,
  Dialog,
  Portal,
  Field,
  Fieldset,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { RiMailLine } from "react-icons/ri";
import "@/animations.css";

const MotionStack = motion(Stack);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const isNameInvalid = nameTouched && !name;
  const isEmailMissing = emailTouched && !email;
  const isEmailInvalid =
    emailTouched && email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  const isMessageInvalid = messageTouched && !message;

  const isFormValid = !isNameInvalid && !isEmailInvalid && !isMessageInvalid && !isEmailMissing;

  const sendMessageHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent!", {
          style: {
            background: "#3182ce",
            color: "#ffffff",
            borderRadius: "10px",
            padding: "16px",
          },
          position: "bottom-center",
          icon: "🚀",
        });

        setOpen(false);
        setName("");
        setEmail("");
        setMessage("");
        setNameTouched(false);
        setEmailTouched(false);
        setMessageTouched(false);
      } else {
        toast.error("Error: " + data.error, {
          style: {
            background: "#e53e3e",
            color: "#ffffff",
            borderRadius: "10px",
            padding: "16px",
          },
          position: "bottom-center",
          icon: "❌",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Error", {
        style: {
          background: "#e53e3e",
          color: "#ffffff",
          borderRadius: "10px",
          padding: "16px",
        },
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
          whileTap={{
            y: 1,
          }}
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
      <Dialog.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement={"center"}
        motionPreset="scale"
      >
        <Portal>
          <Dialog.Backdrop
            _open={{
              animation: "backdrop-fade-in 800ms ease-out",
            }}
            _closed={{
              animation: "backdrop-fade-out 600ms ease-in",
            }}
          />
          <Dialog.Positioner>
            {/* Dialog does not respect framer motion animations so instead we manually animate */}
            <Dialog.Content
              _open={{
                animationName: "center-grow-in, fade-in",
                animationDuration: "800ms",
                animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                animationFillMode: "both",
              }}
              _closed={{
                animationName: "center-shrink-out, fade-out",
                animationDuration: "600ms",
                animationTimingFunction: "cubic-bezier(0.36, 0, 0.66, -0.56)",
                animationFillMode: "both",
              }}
            >
              <Dialog.Header>
                <Dialog.Title>Contact Me</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Fieldset.Root>
                  <Stack>
                    <Fieldset.HelperText>
                      You can reach me directly at{" "}
                      <Text as="span" color="blue.500">
                        stephen.mcelligott.dev@gmail.com{" "}
                      </Text>
                      <Text color="blue.500">or</Text>
                      <Text>
                        Fill out the{" "}
                        <Text as="span" color="blue.500">
                          contact form
                        </Text>{" "}
                        below
                      </Text>
                    </Fieldset.HelperText>
                  </Stack>
                  <Fieldset.Content>
                    <Field.Root invalid={isNameInvalid}>
                      <Field.Label>
                        Name <Field.RequiredIndicator />
                      </Field.Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setNameTouched(true)}
                        name="name"
                      />
                      <Field.ErrorText>Name is required</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!isEmailMissing || !!isEmailInvalid}>
                      <Field.Label>Email address</Field.Label>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)}
                        name="email"
                        type="email"
                      />
                      {isEmailMissing && <Field.ErrorText>Email is required</Field.ErrorText>}
                      {isEmailInvalid && (
                        <Field.ErrorText>Invalid email address</Field.ErrorText>
                      )}{" "}
                    </Field.Root>

                    <Field.Root invalid={isMessageInvalid}>
                      <Field.Label>Message</Field.Label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() => setMessageTouched(true)}
                        resize="none"
                        size="xl"
                        name="message"
                      />
                      <Field.ErrorText>Message is required</Field.ErrorText>
                    </Field.Root>
                  </Fieldset.Content>
                  <MotionButton
                    bgColor="blue.500"
                    color="white"
                    borderRadius="md" // slightly smaller radius for a professional look
                    px={5}
                    py={3}
                    fontSize="md"
                    fontWeight="semibold"
                    textTransform="uppercase" // optional: gives subtle elegance
                    letterSpacing="wider" // subtle spacing for readability
                    boxShadow="sm" // small shadow for depth
                    whileHover={{
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // soft hover shadow
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={sendMessageHandler}
                    disabled={loading || !isFormValid}
                    loading={loading}
                  >
                    Submit
                  </MotionButton>
                </Fieldset.Root>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Flex>
  );
};

export default Hero;
