import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect } from "react";
import styles from "../styles/mobile-menu.module.css";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="p-4 bg-black lg:p-0">
      <button
        className={cn(styles.burger, "visible lg:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col visible md:hidden absolute bg-black",
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="text-sm font-semibold text-white border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "150ms" }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-white border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "175ms" }}
          >
            <Link href="/overview">
              <a className="flex w-auto pb-4">Overview</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-white border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/faq">
              <a className="flex w-auto pb-4">FAQ</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-white border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "250ms" }}
          >
            <Link href="/results">
              <a className="flex w-auto pb-4">Results</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-white border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "275ms" }}
          >
            <Link href="/announcement">
              <a className="flex w-auto pb-4">Announcement</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-white border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "300ms" }}
          >
            <Link href="/rules">
              <a className="flex w-auto pb-4">Rules & Regulations</a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="absolute w-5 h-5 text-white"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="absolute w-5 h-5 text-white"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
