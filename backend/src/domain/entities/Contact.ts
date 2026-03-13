/**
 * Contact entity representing a stored contact form submission.
 */
export interface Contact {
  /** Unique identifier. */
  id: string;
  /** Sender full name. */
  name: string;
  /** Sender email address. */
  email: string;
  /** Sender message body. */
  message: string;
  /** Creation timestamp. */
  createdAt: Date;
}

