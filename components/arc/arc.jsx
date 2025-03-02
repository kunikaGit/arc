"use client"; // ✅ Required for GSAP

// import { useEffect, useRef } from "react";
// import gsap from "gsap-trial/dist/gsap";
// import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import Hero from "@/components/homes/arc-home/Hero";
import Testimonials from "../homes/arc-home/testimonial";
import Calltoaction from "../homes/arc-home/Calltoaction";
import Header3 from "../headers/Arc-header";
import Footer1 from "../footer/Footer1";
import CoverFlowSlider from "../homes/arc-home/CoverFlowSlider";
import PricingTable from "../homes/arc-home/pricingTable";
import WhyChoose from "../homes/arc-home/whychoose";

export default function ArcContent() {
    // const mainRef = useRef(null);
    // const smootherRef = useRef(null);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    //     smootherRef.current = ScrollSmoother.create({
    //         wrapper: "#smooth-wrapper",
    //         content: "#smooth-content",
    //         smooth: 2,
    //         effects: true,
    //     });

    //     ScrollTrigger.create({
    //         trigger: ".hotbids-section",
    //         start: "top center",
    //         end: "+=300",
    //         pin: true,
    //         markers: false, // Remove markers in production
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    //     };
    // }, []);

    return (
        <>
            <Header3 />
            <div id="smooth-wrapper" >
                <div id="smooth-content">
                    <main>
                        <Hero />
                        <div className="hotbids-section" data-speed="1.2">
                            <CoverFlowSlider />

                        </div>
                        <div className="hotbids-section" data-speed="1.5">
                            <PricingTable />
                        </div>
                        <div className="collections-section" data-speed="2">
                            <Testimonials />
                        </div>
                        <div className="categories-section" data-speed="2.5">
                            <WhyChoose />
                        </div>
                        <div className="categories-section" data-speed="3">
                            <Calltoaction />
                        </div>
                    </main>
                    <Footer1 />
                </div>
            </div>
        </>
    );
}
