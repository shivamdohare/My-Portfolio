import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A goal-oriented front-end developer with over 1 year of experience
          developing responsive and interactive web applications. Seeking to use
          technical proficiency and creativity to create engaging user
          experiences and advance professionally. Looking to leverage effective
          debugging, code optimization, and project collaboration capabilities
          to produce applications that exceed user expectations.
        </p>
        <br />
        <p className="text-xl">
          Lead the management of state and props in React applications to ensure
          a seamless user experience.Utilize a profound understanding of React's
          component-based architecture, incorporating React hooks and functional
          components for effective development.Recently accomplished the
          integration of a third-party news API into a live news application,
          enriching user engagement.Proficient in leveraging popular React UI
          libraries like Tailwind CSS, coupled with expertise in React router
          for efficient client-side routing.
        </p>
      </div>
    </div>
  );
};

export default About;
