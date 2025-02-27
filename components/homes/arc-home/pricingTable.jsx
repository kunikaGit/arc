"use client";

import { useEffect } from "react";
import tippy from "tippy.js";
import Trending from "../home-13/Trending";
import Mints from "../home-13/Mints";
import Sweeps from "../home-13/Sweeps";
// import Trending from "./Trending";
// import Sweeps from "./Sweeps";
// import Mints from "./Mints";

export default function PricingTable() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  return (
    <section className="py-20 pricing-table">
      <div className="container">
      <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="mb-0 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
          Choose the Best Plan</h2>
        </div>
        <div className="scrollbar-custom overflow-x-auto">
          <ul
            className="nav nav-tabs mb-8 flex items-center space-x-1 sm:space-x-6 justify-center"
            role="tablist"
          >
            {/* Trending */}
            <li className="nav-item" role="presentation">
              <button
                className="tab-button rounded-sm nav-link  active relative flex items-center whitespace-nowrap py-1.5 px-4 font-display font-semibold text-jacarta-400 hover:text-jacarta-700 dark:text-jacarta-200 dark:hover:text-white"
                id="trending-tab"
                data-bs-toggle="tab"
                data-bs-target="#trending"
                type="button"
                role="tab"
                aria-controls="trending"
                aria-selected="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-1 h-5 w-5 fill-orange"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13 10h7l-9 13v-9H4l9-13z" />
                </svg>
                <span className="font-display  font-medium text-lg">
                Two-Phase Challenge
                </span>
              </button>
            </li>

            {/* Sweeps */}
            <li className="nav-item" role="presentation">
              <button
                className="tab-button nav-link  relative flex items-center whitespace-nowrap py-1.5 px-4 font-display font-semibold text-jacarta-400 hover:text-jacarta-700 dark:text-jacarta-200 dark:hover:text-white"
                id="sweeps-tab"
                data-bs-toggle="tab"
                data-bs-target="#sweeps"
                type="button"
                role="tab"
                aria-controls="sweeps"
                aria-selected="false"
                tabIndex="-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-1 h-5 w-5 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
                <span className="font-display font-medium text-lg font-medium">
                Instant Funding
                </span>
              </button>
            </li>

           
          </ul>

          <div className="tab-content">
            {/* Trending content */}
            <div
              className="tab-pane fade show active"
              id="trending"
              role="tabpanel"
              aria-labelledby="trending-tab"
            >
              <Trending />
            </div>

            {/* Sweeps content */}
            <div
              className="tab-pane fade"
              id="sweeps"
              role="tabpanel"
              aria-labelledby="sweeps-tab"
            >
              <Sweeps />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
