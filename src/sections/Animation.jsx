import { lottieJson } from "@/assets";
import React from "react";
import Lottie from "react-lottie-player";
const Animation = () => {
  return (
    <div  className="flex justify-center max-[600px]:max-h-[250px]">
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 750, height: 450 }}
      />
    </div>
  );
};

export default Animation;
