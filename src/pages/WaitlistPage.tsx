import { useState } from "react";
import { GlassPage, GlassHero, GlassFooter } from "@infinitespaces/ui";
import { Footer } from "@/sections/Footer";

export const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsPending(true);
    // Waitlist submit — currently a no-op. Will connect to Supabase `waitlist_signups` table.
    await new Promise((r) => setTimeout(r, 500));
    setIsPending(false);
    setSubmitted(true);
  };

  return (
    <GlassPage>
      <GlassHero
        title="Join the Waitlist"
        subtitle="Thanks for your interest in Infinite Spaces. We're building something new — leave your email and we'll let you know when it's ready."
        minHeight="80vh"
      >
        {submitted ? (
          <div className="text-sm text-blue-400 font-mono uppercase tracking-wider">
            You're on the list. We'll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 justify-center w-full max-w-md">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
              className="text-white text-sm bg-white/[0.03] box-border h-[42px] leading-[14px] w-full border border-white/[0.06] px-4 rounded-lg font-mono placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isPending}
              className="text-white text-sm bg-blue-500/80 h-[42px] leading-[14px] px-6 rounded-lg font-mono hover:bg-blue-500 disabled:opacity-50 cursor-pointer shrink-0 transition-colors"
            >
              {isPending ? "..." : "Join"}
            </button>
          </form>
        )}
      </GlassHero>

      <GlassFooter text="Infinite Spaces — Early access coming soon." />
      <Footer />
    </GlassPage>
  );
};
