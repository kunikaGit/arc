"use client";
import { explore, homes, pages, resources } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const menu = [
    { id: 1, href: "/arc-home", text: "ARC Home" },
];
export default function AcrNav() {
    const pathname = usePathname();
    const isActiveParentMenu = (menus) => {
        return menus.some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
        );
    };
    return (
        <>
            <li className="js-nav-dropdown group relative">
                <Link
                    href="/arc-home"
                    className={`dropdown-toggle flex items-center justify-between py-3.5 font-display text-base 
             ${isActiveParentMenu(menu)
                            ? "text-accent dark:text-accent"
                            : "text-jacarta-700 dark:text-white"
                        } hover:text-accent focus:text-accent  dark:hover:text-accent dark:focus:text-accent lg:px-5`}
                    id="navDropdown-1"
                    aria-expanded="false"
                    role="button"
                    data-bs-toggle="dropdown">
                    Home

                </Link>
            </li>


            <li className="group">
                <Link
                    href="/faq"
                    className={`flex items-center justify-between py-3.5 font-display text-base  ${"/create".split("/")[1] == pathname.split("/")[1]
                        ? "text-accent dark:text-accent"
                        : "text-jacarta-700 dark:text-white"
                        }  hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    FAQ
                </Link>
            </li>
            <li className="group">
                <Link
                    href="#"
                    className={`flex items-center justify-between py-3.5 font-display text-base  ${"/create".split("/")[1] == pathname.split("/")[1]
                        ? "text-accent dark:text-accent"
                        : "text-jacarta-700 dark:text-white"
                        }  hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    About Us
                </Link>
            </li>
            <li className="group">
                <Link
                    href="/create"
                    className={`flex items-center justify-between py-3.5 font-display text-base  ${"/create".split("/")[1] == pathname.split("/")[1]
                        ? "text-accent dark:text-accent"
                        : "text-jacarta-700 dark:text-white"
                        }  hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    Client Area
                </Link>
            </li>
            <li className="group">
                <Link
                    href="#"
                    className={`flex items-center justify-between py-3.5 font-display text-base  ${"/create".split("/")[1] == pathname.split("/")[1]
                        ? "text-accent dark:text-accent"
                        : "text-jacarta-700 dark:text-white"
                        }  hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent lg:px-5`}>
                    Free Trial
                </Link>
            </li>
        </>
    );
}
