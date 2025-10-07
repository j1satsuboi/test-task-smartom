import React from "react";
import Hero from "../main/sections/hero/Hero";
import History from "./sections/history/History";
import Advantages from "./sections/advantages/Advantages";
import Services from "./sections/services/Services";
import Partnership from "./sections/partnership/Partnership";
import Feedback from "./sections/feedback/Feedback";
import FadeIn from "../../FadeIn";

const Main = () => {
  return (
    <main className="w-full bg-white">
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <History />
      </FadeIn>
      <FadeIn>
        <Advantages />
      </FadeIn>
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <Partnership />
      </FadeIn>
      <Feedback />
    </main>
  );
};

export default Main;
