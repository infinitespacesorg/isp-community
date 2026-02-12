import { useState } from "react";
import { useNewsletterSubscribe } from "@/hooks/useData";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { create, isPending, error } = useNewsletterSubscribe();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      await create({ email: email.trim() });
      setEmail("");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Failed to subscribe:", err);
    }
  };

  return (
    <div className="box-border caret-transparent col-end-[span_6] col-start-auto order-4 mt-14 md:col-end-[span_5] md:col-start-1 md:order-none md:mt-0">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <form className="box-border caret-transparent" onSubmit={handleSubmit}>
            <div className="items-end box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
              <div className="box-border caret-transparent max-w-[calc(100%_-_114px)]">
                <div className="relative box-border caret-transparent flex flex-wrap">
                  <label className="text-neutral-500 text-xs box-border caret-transparent block leading-3 uppercase w-full ml-0 font-aeonik_mono md:ml-[17px]">
                    Newsletter
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isPending}
                    className="text-neutral-950 text-sm items-center bg-transparent box-border caret-transparent gap-x-1.5 flex shrink-0 h-[42px] justify-center leading-[14px] gap-y-1.5 uppercase w-full border border-stone-500 mt-3 px-[15px] py-0 rounded-lg border-solid font-aeonik_mono disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="box-border caret-transparent">
                <button
                  type="submit"
                  disabled={isPending}
                  className="text-neutral-900 text-sm items-center bg-stone-300 caret-transparent gap-x-1.5 flex shrink-0 h-[42px] justify-center leading-[14px] gap-y-1.5 text-center uppercase border border-stone-300 px-[25px] py-0 rounded-lg border-solid font-aeonik_mono hover:text-white hover:bg-violet-600 hover:border-violet-600 disabled:opacity-50 cursor-pointer"
                >
                  <span className="box-border caret-transparent block">
                    {isPending ? "Submitting..." : "Submit"}
                  </span>
                </button>
              </div>
            </div>
            {showSuccess && (
              <div className="box-border caret-transparent mt-3 text-sm text-green-600 font-aeonik_mono">
                Thank you for subscribing!
              </div>
            )}
            {error && (
              <div className="box-border caret-transparent mt-3 text-sm text-red-600 font-aeonik_mono">
                {error.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
