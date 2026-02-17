import { usePricingPlans } from "@/hooks/useData";
import { Footer } from "@/sections/Footer";

export const PricingPage = () => {
  const { data: plans, isPending, error } = usePricingPlans();

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="box-border caret-transparent mt-14 md:mt-20">
            <h1 className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] mb-4 md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
              Pricing
            </h1>
            <p className="text-lg box-border caret-transparent leading-[27px] mb-10 md:mb-14">
              Choose the plan that works best for you
            </p>

            {isPending && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">Loading plans...</span>
              </div>
            )}

            {error && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase text-red-600">
                  Error loading plans
                </span>
              </div>
            )}

            {!isPending && !error && plans && plans.length === 0 && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">No plans yet</span>
              </div>
            )}

            {!isPending && !error && plans && plans.length > 0 && (
              <div className="box-border caret-transparent grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                  <div
                    key={plan.id}
                    className={`box-border caret-transparent p-8 border-2 rounded-2xl ${
                      plan.featured
                        ? "border-violet-600 bg-violet-50"
                        : "border-stone-300 bg-white"
                    }`}
                  >
                    {plan.featured && (
                      <div className="text-white text-xs items-center bg-violet-600 box-border caret-transparent gap-x-1.5 inline-flex justify-center leading-[18px] gap-y-1.5 uppercase px-3 py-1 rounded-[14px] mb-4">
                        Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-extrabold box-border caret-transparent leading-6 mb-2 md:text-[32px] md:leading-8">
                      {plan.name}
                    </h3>
                    <div className="box-border caret-transparent mb-6">
                      <span className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
                        ${plan.price}
                      </span>
                      <span className="text-neutral-500 text-lg box-border caret-transparent ml-2">
                        / month
                      </span>
                    </div>
                    {plan.description && (
                      <p className="text-base box-border caret-transparent leading-[24px] mb-6">
                        {plan.description}
                      </p>
                    )}
                    {plan.features && (
                      <ul className="box-border caret-transparent space-y-3 mb-8 pl-0 list-none">
                        {plan.features.split(",").map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-base box-border caret-transparent flex items-start leading-[24px]"
                          >
                            <span className="box-border caret-transparent mr-2 text-violet-600">
                              ✓
                            </span>
                            {feature.trim()}
                          </li>
                        ))}
                      </ul>
                    )}
                    <button
                      className={`text-sm items-center box-border caret-transparent gap-x-1.5 flex w-full h-[42px] justify-center leading-[14px] gap-y-1.5 uppercase px-6 rounded-lg font-aeonik-mono cursor-pointer ${
                        plan.featured
                          ? "text-white bg-violet-600 hover:bg-neutral-950"
                          : "text-white bg-neutral-950 hover:bg-violet-600"
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
