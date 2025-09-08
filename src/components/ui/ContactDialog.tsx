import { Dialog, Portal, Fieldset, Field, Input, Textarea, Button } from "@chakra-ui/react";
import { useContactForm } from "@/hooks/useContactForm";
import { motion } from "framer-motion";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  form: ReturnType<typeof useContactForm>;
  loading: boolean;
  onSubmit: () => void;
}

const MotionButton = motion(Button);

export const ContactDialog: React.FC<ContactDialogProps> = ({
  isOpen,
  onClose,
  form,
  loading,
  onSubmit,
}) => (
  <Dialog.Root
    open={isOpen}
    onOpenChange={(e) => onClose()}
    placement="center"
    motionPreset="scale"
  >
    <Portal>
      <Dialog.Backdrop
        _open={{ animation: "backdrop-fade-in 800ms ease-out" }}
        _closed={{ animation: "backdrop-fade-out 600ms ease-in" }}
      />
      <Dialog.Positioner>
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
              <Field.Root invalid={form.isNameInvalid}>
                <Field.Label>
                  Name <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  value={form.name}
                  onChange={(e) => form.setName(e.target.value)}
                  onBlur={() => form.handleBlur("name")}
                />
                <Field.ErrorText>Name is required</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={!!form.isEmailMissing || !!form.isEmailInvalid}>
                <Field.Label>Email</Field.Label>
                <Input
                  value={form.email}
                  onChange={(e) => form.setEmail(e.target.value)}
                  onBlur={() => form.handleBlur("email")}
                  type="email"
                />
                {form.isEmailMissing && <Field.ErrorText>Email is required</Field.ErrorText>}
                {form.isEmailInvalid && <Field.ErrorText>Invalid email address</Field.ErrorText>}
              </Field.Root>

              <Field.Root invalid={form.isMessageInvalid}>
                <Field.Label>Message</Field.Label>
                <Textarea
                  value={form.message}
                  onChange={(e) => form.setMessage(e.target.value)}
                  onBlur={() => form.handleBlur("message")}
                  resize="none"
                />
                <Field.ErrorText>Message is required</Field.ErrorText>
              </Field.Root>

              <MotionButton
                bgColor="blue.500"
                color="white"
                borderRadius="md"
                px={5}
                py={3}
                fontSize="md"
                fontWeight="semibold"
                whileHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={onSubmit}
                disabled={loading || !form.isFormValid}
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
);
