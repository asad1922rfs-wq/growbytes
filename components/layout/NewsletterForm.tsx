"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitted");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4.5 flex flex-wrap gap-2.5">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={status === "submitted" ? "Thanks — you're subscribed!" : "Your email address"}
        className="min-w-0 flex-[1_1_200px] rounded-xl border border-ink/[0.16] bg-white px-4 py-3.5 font-sans text-[14.5px] text-ink outline-none transition-[border-color,box-shadow] duration-[250ms] focus:border-orange focus:shadow-[0_0_0_3px_rgba(238,91,43,0.14)]"
      />
      <button
        type="submit"
        className="inline-flex flex-none items-center gap-2.5 rounded-xl border border-ink bg-ink px-[16px] py-[12.5px] font-sans text-[17px] font-normal tracking-[0.02em] text-white transition-colors duration-[250ms] hover:border-orange hover:bg-orange"
      >
        Subscribe
      </button>
    </form>
  );
}
