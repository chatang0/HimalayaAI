import { useState } from "react";
import type { ContactFormData } from "../../../types";
import { submitContact } from "../api/contactApi";

/**
 * React hook handling contact form state and submission.
 */
export function useContactForm() {
  const [values, setValues] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const updateField = (field: keyof ContactFormData, value: string): void => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (): Promise<void> => {
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    const trimmed: ContactFormData = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim()
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setError("Please fill in all fields.");
      setSubmitting(false);
      return;
    }

    const response = await submitContact(trimmed);

    if (!response.success) {
      setError(response.error ?? "Failed to send message.");
      setSubmitting(false);
      return;
    }

    setSuccess("Thanks for reaching out! We will get back to you soon.");
    setValues({ name: "", email: "", message: "" });
    setSubmitting(false);
  };

  return {
    values,
    submitting,
    error,
    success,
    updateField,
    handleSubmit
  };
}

