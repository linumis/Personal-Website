"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-accent font-serif text-lg italic animate-fade-up">
        You are in. Talk soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your@email.com"
          required
          aria-label="Email address"
          className="flex-1 px-4 py-3 bg-parchment border border-ink/20 text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-ink text-parchment font-sans text-sm tracking-wide uppercase hover:bg-ink/85 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Join the newsletter"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-700">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
