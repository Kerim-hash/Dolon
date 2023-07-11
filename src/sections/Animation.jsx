import { lottieJson } from "@/assets";
import React from "react";
import Lottie from "react-lottie-player";
const Animation = () => {
  return (
    <div  className="animation" >
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 950, height: 550 }}
      />
    </div>
  );
};

export default Animation;
