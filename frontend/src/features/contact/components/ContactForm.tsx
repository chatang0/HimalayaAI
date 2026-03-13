import React from "react";
import { useContactForm } from "../hooks/useContactForm";

/**
 * Contact section with a simple form that persists messages.
 */
export const ContactForm: React.FC = () => {
  const { values, submitting, error, success, updateField, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-10 sm:py-12">
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="text-sm text-slate-400 max-w-2xl">
          Reach out if you are interested in collaborating on Nepali-language AI research, student
          projects, or dataset and model contributions.
        </p>
      </div>
      <form
        className="grid gap-4 max-w-md"
        onSubmit={(event) => {
          event.preventDefault();
          void handleSubmit();
        }}
      >
        <label className="flex flex-col gap-1 text-xs text-slate-300">
          Name
          <input
            type="text"
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-primary focus:outline-none"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-slate-300">
          Email
          <input
            type="email"
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-primary focus:outline-none"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-slate-300">
          Message
          <textarea
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-primary focus:outline-none min-h-[120px]"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending…" : "Send message"}
        </button>
        {error && <p className="text-xs text-red-400">{error}</p>}
        {success && <p className="text-xs text-emerald-400">{success}</p>}
      </form>
    </section>
  );
};

