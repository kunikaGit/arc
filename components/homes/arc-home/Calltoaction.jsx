import Image from "next/image";
import Link from "next/link";

export default function Calltoaction() {
  return (
    <div className="relative z-10 -mt-10 dark:bg-jacarta-900">
      <div className="container">
        <div className="relative overflow-hidden rounded-2.5xl px-16 pt-16 pb-8 shadow-md lg:px-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              width={1920}
              height={789}
              src="/img/gradient_light.jpg"
              priority
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
            <Image
              width={1920}
              height={900}
              src="/img/gradient_dark.jpg"
              alt="gradient dark"
              className="h-full w-full"
            />
          </picture>
          <div className="items-center justify-between md:flex">
            <div className="mb-6 md:w-1/2">
              <h2 className="mb-4 font-display text-2xl text-jacarta-700 dark:text-white sm:text-3xl uppercase">
              discover your potential and become a trader
              </h2>
              <p className="mb-8 text-lg dark:text-jacarta-300">
              Join the Leading Prop Firm<br/>
              </p>
              <div className="flex items-center">
            <Link
              href="/create"
              className=" w-44 block text-md rounded-full bg-accent py-3
             px-5 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Start Challenge
            </Link>
            <Link
              href="/create"
              className="mx-3 block rtl:!mr-6 w-44 rounded-full bg-white py-3 px-5 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
            >
              Free Trial
            </Link>
          </div>
              
            </div>
            <Image
              width={340}
              height={300}
              src="/img/crypto-consultant/cta_illustration.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
