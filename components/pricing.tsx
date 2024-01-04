import React from "react";
import PricingCard from "./pricing__card";

export interface IBulletPoints {
    id: number
    title: string
}

const Pricing = (): JSX.Element => {
  const starter: IBulletPoints[] = [
    { id: 1, title: "Customized workouts for beginners" },
    { id: 2, title: "Basic nutritional guidance" },
    { id: 3, title: "Progress tracking tools" },
  ];
  const pro: IBulletPoints[] = [
    { id: 1, title: "Personalized workouts for strength training" },
    { id: 2, title: "Advanced nutritional guidance" },
    { id: 3, title: "Comprehensive progress tracking tools" },
    { id: 4, title: "Exclusive access to monthly challenges" },
  ];
  const max: IBulletPoints[] = [
    { id: 1, title: "Tailored workouts for advanced endurance" },
    { id: 2, title: "Pro-level nutritional coaching" },
    { id: 3, title: "Comprehensive progress tracking with analytics" },
    {
      id: 4,
      title: "Exclusive access to monthly challenges and community events",
    },
    { id: 5, title: "Priority customer support" },
  ];

  return (
    <section className="max-container py-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Our plans
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Welcome to TrackFit360, where your fitness journey is our priority.
            Choose a plan that aligns with your goals and preferences, and lets
            embark on this transformative experience together.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PricingCard
            title={`FitStarter`}
            description={`Perfect for beginners, the FitStarter plan offers essential features to kickstart your fitness journey. Get customized workouts, basic nutritional guidance and more.`}
            price={"9.99"}
            bulletPoints={starter}
          />
          <PricingCard
            title={`StrengthPro`}
            description={`Elevate your strength training with the StrengthPro plan. Enjoy personalized workouts, advanced nutritional guidance, comprehensive progress tracking tools and more.`}
            price={"14.99"}
            bulletPoints={pro}
          />
          <PricingCard
            title={`EnduranceMax`}
            description={`Take your fitness to the next level with the EnduranceMax plan. Experience tailored workouts for advanced endurance, pro-level nutritional coaching and more.`}
            price={"19.99"}
            bulletPoints={max}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
