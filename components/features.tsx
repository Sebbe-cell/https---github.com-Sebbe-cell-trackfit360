import Image from "next/image";
import React from "react";
import Card from "./card";

const hashTags = [
  { hashtag: "tracking", id: 1 },
  { hashtag: "health", id: 2 },
  { hashtag: "gym", id: 3 },
];

const Features = (): JSX.Element => {
  return (
    <section className="max-container py-20">
      <div className="flex md:flex-row justify-between flex-col gap-3 md:gap-1 flex-1 items-center">
        <Card
          title={"Track Your Workouts"}
          description={`Effortlessly log your daily workouts, record sets, reps, and weights.
          Our intuitive interface makes it easy to monitor your progress and
          stay accountable.`}
          imgSrc={"/images/bild1.jpg"}
          hashtags={hashTags}
        />
        <Card
          title={"Set and Achieve Goals"}
          description={`Define your fitness milestones and let us help you reach them. Our goal-setting feature allows you to track and celebrate every success along the way.`}
          imgSrc={"/images/bild2.jpg"}
          hashtags={hashTags}
        />
        <Card
          title={"Personalized Workout Plans"}
          description={`Discover tailored workout plans designed to meet your unique fitness needs. Whether you're aiming for weight loss, muscle gain, or overall well-being.`}
          imgSrc={"/images/bild3.jpg"}
          hashtags={hashTags}
        />
      </div>
    </section>
  );
};

export default Features;
