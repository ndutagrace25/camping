import React from "react";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <section>
      <div>
        <Fade delay={500} bottom>
          <p className="text-black">
            Camping is the best activity you would love to unwind, relax,
            rejuvinate, name them all. Staying up late in the duskiness with
            friends and family while enjoying the view of the sky is such an
            awesome feeling. Kenya is blessed with such beautiful camp sites.
          </p>
        </Fade>
        <Fade delay={700} bottom>
          <p>And here are some of the best camping places in Kenya</p>
        </Fade>
      </div>
    </section>
  );
};

export default Intro;
