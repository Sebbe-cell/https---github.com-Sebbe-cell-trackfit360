import Features from "@/components/features";
import Hero from "@/components/hero";
import Cta from "@/components/cta";
import Testimonial from "@/components/testimonial";
import ContentSection from "@/components/contentSection__1";
import Divider from "@/components/divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrackFit360",
  description: "Your Personal Gym Companion",
};

const Page = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Divider />
      <ContentSection
        title={`Your all-in-one solution for tracking and elevating your fitness
            journey.`}
        description_first={`At TrackFit360, we believe in making fitness tracking simple,
            effective, and motivating. Whether you are a seasoned athlete or
            just starting, our platform is designed to be your personal gym
            companion, guiding you towards your health and wellness goals.`}
        description_second={`Unlock personalized insights and seamlessly track your progress with
            TrackFit360. Elevate every workout and witness transformative
            results on your fitness journey.`}
        buttonText={`Learn more`}
      />
      <Divider />
      <Features />
      <Cta />
      <Testimonial />
    </>
  );
};

export default Page;
