import { useState } from "react";
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
    <div className="box-border caret-transparent flex flex-col min-h-[936px] md:min-h-[884px]">
      <main className="box-border caret-transparent basis-[0%] grow flex items-center justify-center px-3 md:px-9">
        <div className="max-w-lg w-full text-center">
          <h1 className="text-4xl font-black tracking-tight mb-4 font-aeonik md:text-5xl">
            Join the Waitlist
          </h1>
          <p className="text-neutral-600 text-base mb-8 leading-relaxed">
            Thanks for your interest in Infinite Spaces. We're building something new — leave your
            email and we'll let you know when it's ready.
          </p>

          {submitted ? (
            <div className="text-sm text-violet-600 font-aeonik_mono uppercase tracking-wider">
              You're on the list. We'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isPending}
                className="text-neutral-950 text-sm bg-transparent box-border h-[42px] leading-[14px] w-full max-w-[320px] border border-neutral-300 px-4 rounded-lg font-aeonik_mono disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isPending}
                className="text-white text-sm bg-neutral-950 h-[42px] leading-[14px] px-6 rounded-lg font-aeonik_mono hover:bg-violet-600 disabled:opacity-50 cursor-pointer shrink-0"
              >
                {isPending ? "..." : "Join"}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
