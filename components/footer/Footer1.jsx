import Socials from "./Socials";
import MarketplaceLinks from "./MarketplaceLinks";
import CompanyLinks from "./CompanyLinks";
import MyAccountKink from "./MyAccountLink";
import Image from "next/image";
import Link from "next/link";

export default function Footer1() {
  return (
    <footer className="page-footer bg-white dark:bg-jacarta-900">
      <div className="container">
        <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
          <div className="col-span-full sm:col-span-3 md:col-span-4">
            <Link href="/" className="mb-6 inline-block">
              <Image
                width={130}
                height={28}
                src="/img/logo.png"
                className=" dark:hidden"
                alt="Xhibiter | NFT Marketplace"
              />
              <Image
                width={130}
                height={28}
                src="/img/logo_white.png"
                className="hidden max-h-7 dark:block"
                alt="Xhibiter | NFT Marketplace"
              />
            </Link>
            <p className="mb-12 dark:text-jacarta-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, ipsum.
            </p>

            <div className="flex space-x-5">
              <Socials />
            </div>
          </div>

          <div className="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">
              Marketplace
            </h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <MarketplaceLinks />
            </ul>
          </div>

          <div className="col-span-full sm:col-span-3 md:col-span-2">
            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">
              Company
            </h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <CompanyLinks />
            </ul>
          </div>

          <div className="col-span-full sm:col-span-3 md:col-span-2">
            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">
              My Account
            </h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <MyAccountKink />
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
          <ul className="flex flex-wrap space-x-4 text-sm dark:text-jacarta-400 justify-center items-center">
            <li>
              <a href="#" className="hover:text-accent">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
