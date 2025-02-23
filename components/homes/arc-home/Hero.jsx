"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";


export default function Hero() {
  const videoRef = useRef(null); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; 
    }
  }, []);
  return (
    <section className="hero relative py-40 md:pt-32">
        <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0  h-full w-full object-contain"
        style={{zIndex:'-1',top:'50px'}}
      >
        <source src="/img/bubble.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="container">
        <div className="pt-24 text-center">
          <h1 className="mb-10 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
            Unlock Your Potential<br /> as a Funded Trader{" "}<br />
            <span className="animate-gradient lg:text-5xl xl:text-5xl">Trade with our capital and earn up to 90% profit splits</span>
          </h1>

          <Link
            href="/create"
            className="w-100 text-lg rounded-full bg-accent py-5 px-10 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
          >
            Start Your Challenge
          </Link>
        </div>
      </div>
    </section>
  );
}
