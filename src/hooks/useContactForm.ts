import { useState } from "react";

export const useContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const handleBlur = (field: "name" | "email" | "message") =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const isNameInvalid = touched.name && !name;
  const isEmailMissing = touched.email && !email;
  const isEmailInvalid =
    touched.email && email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const isMessageInvalid = touched.message && !message;

  const isFormValid = !isNameInvalid && !isEmailInvalid && !isMessageInvalid && !isEmailMissing;

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setTouched({ name: false, email: false, message: false });
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    touched,
    handleBlur,
    isNameInvalid,
    isEmailMissing,
    isEmailInvalid,
    isMessageInvalid,
    isFormValid,
    resetForm,
  };
};
