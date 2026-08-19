export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/**
 * Contact form submission stub.
 * Wire this to Resend / Formspree / your own API endpoint.
 */
export async function submitContact(payload: ContactPayload): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (process.env.NODE_ENV === "development") {
    console.info("[contact] submitted", payload);
  }
}
