import ContentSection from "@/components/contentSection__1";
import List from "@/components/list";

const About = (): JSX.Element => {
  return (
    <div>
      <ContentSection
        title={`Your all-in-one solution for tracking and elevating your fitness journey.`}
        description_first={`Welcome to TrackFit360, where we are committed to helping you achieve your fitness goals
          and lead a healthy lifestyle. Our state-of-the-art facilities, experienced trainers,
          and variety of fitness programs make us the perfect choice for your fitness journey.`}
        description_second={`At TrackFit360, our mission is to inspire and empower individuals to prioritize their
          health and well-being through personalized fitness programs, nutritional guidance, and
          a supportive community.`}
        buttonText={`Learn more`}
      />
      <List />
      <ContentSection title={`Join Us Today!`} description_first={`Whether you're a beginner or an experienced fitness enthusiast, TrackFit360 is the
          place for you. Join us today and embark on a journey towards a healthier, happier you.`}/>
    </div>
  );
};

export default About;
