import React from "react";
import { useContactForm } from "../hooks/useContactForm";

/**
 * Contact section with a clean, focused form.
 */
export const ContactForm: React.FC = () => {
  const { values, submitting, error, success, updateField, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="section bg-slate-950">
      <div className="section-inner">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-block h-0.5 w-10 rounded-full bg-orange-500" />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Connect
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              We&apos;re currently focused on building a large-scale Nepali Devanagari text corpus.
              If you&apos;re interested in contributing data, collaborating on cleaning and
              evaluation, or exploring future model work, send us a short note and we&apos;ll get
              back to you.
            </p>
          </div>

          <form
            className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 px-4 sm:px-6 py-5 sm:py-6 shadow-xl shadow-slate-950/40"
            onSubmit={(event) => {
              event.preventDefault();
              void handleSubmit();
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs text-slate-300">
                Name
                <input
                  type="text"
                  className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-orange-500 focus:outline-none"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                />
              </label>
              <label className="flex flex-col gap-1 text-xs text-slate-300">
                Email
                <input
                  type="email"
                  className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-orange-500 focus:outline-none"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 text-xs text-slate-300">
              Message
              <textarea
                className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-orange-500 focus:outline-none min-h-[120px] leading-relaxed"
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
            </label>
            <div className="flex flex-col gap-2 pt-1">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? "Sending…" : "Send message"}
              </button>
              {error && <p className="text-xs text-red-400">{error}</p>}
              {success && <p className="text-xs text-emerald-400">{success}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

