"use client";

import { useState } from "react";
import faqData from "./questions";

export default function Faq() {
    const faqCategories = Object.keys(faqData);
    const midPoint = Math.ceil(faqCategories.length / 2); // Split categories into two columns
    const firstColumn = faqCategories.slice(0, midPoint);
    const secondColumn = faqCategories.slice(midPoint);

    // State for accordion toggle
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };

    return (
        <section className="relative py-24 dark:bg-jacarta-800">
            <div className="container">
                <div className="max-w-3xl text-center m-auto">
                    <h2 className="mb-24 font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Two-column layout */}
                <div className="justify-between lg:flex lg:space-x-20">
                    {/* First Column (45%) */}
                    <div className="lg:w-[50%]">
                        {firstColumn.map((category, index) => (
                            <div key={index} className="mb-20">
                                <h2 className="text-lg font-semibold mb-7 text-[#000] capitalize flex gap-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={24} width={24}>
                                        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path>
                                    </svg>
                                    {category.replace(/([A-Z])/g, " $1")}
                                </h2>

                                {faqData[category].map((elm) => (
                                    <div key={elm.id} className="mb-5 rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                        <button
                                            className="flex justify-between w-full px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                            onClick={() => toggleAccordion(elm.id)}
                                        >
                                            <span>{elm.question}</span>
                                            <span className="text-xl">{openQuestion === elm.id ? "−" : "+"}</span>
                                        </button>

                                        {openQuestion === elm.id && (
                                            <div className="border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                                <p className="dark:text-jacarta-200">{elm.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Second Column (55%) */}
                    <div className="lg:w-[50%]">
                        {secondColumn.map((category, index) => (
                            <div key={index} className="mb-20">
                                <h2 className="text-lg font-semibold mb-7 flex items-center gap-3 text-[#000] capitalize">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={24} width={24}>
                                        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path>
                                    </svg>
                                    {category.replace(/([A-Z])/g, " $1")}
                                </h2>

                                {faqData[category].map((elm) => (
                                    <div key={elm.id} className="mb-5 rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                        <button
                                            className="flex justify-between w-full px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                            onClick={() => toggleAccordion(elm.id)}
                                        >
                                            <span>{elm.question}</span>
                                            <span className="text-xl">{openQuestion === elm.id ? "−" : "+"}</span>
                                        </button>

                                        {openQuestion === elm.id && (
                                            <div className="border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                                <p className="dark:text-jacarta-200">{elm.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
