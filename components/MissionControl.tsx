import Image from "next/image";
import React from "react";
import container from "../assets/tv-background.svg";

const MissionControl = () => {
  return (
    <section className="flex justify-center items-center h-screen bg">
      <div className="relative">
        <Image
          src={container}
          alt="container"
          width={800}
          height={800}
          className="z-20"
        />
        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1 text-white font-bold text-2xl z-30">
          Mission Control - Level 8
        </h1>
      </div>
    </section>
  );
};

export default MissionControl;
