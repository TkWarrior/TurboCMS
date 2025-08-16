"use client"
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypeWriterHeadline() {
  const [animationKey , setAnimationKey] = useState(0);
  return (
    <h1 key={animationKey} className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 ">
      <TypeAnimation
        sequence={["From Idea to Impact.", 1500]}
        wrapper="span"
        repeat={0}
        speed={50}
        cursor={false}
        className="block gradient-text"
      />
     
      <TypeAnimation
        sequence={[
          1500,
          "Let AI Fuel Your Blog. ",
          3000,
          () => {
            setAnimationKey((prevKey) => prevKey + 1);
          },
        ]}
        wrapper="span"
        speed={40}
        cursor={false}
        className="block gradient-text"
        repeat={0}
      />
    </h1>
  );
}

export default TypeWriterHeadline