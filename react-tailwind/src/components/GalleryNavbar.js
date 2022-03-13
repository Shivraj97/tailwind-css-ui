import React from "react";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as ConversationIcon } from "../icons/conversation.svg";
import { ReactComponent as FireIcon } from "../icons/fire.svg";
import { ReactComponent as StarIcon } from "../icons/star.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { useState } from "react";

const GalleryNavbar = () => {
  const [fires, setFires] = useState(1000);
  const [stars, setStars] = useState(1500);

  const increment = (incrementer) => () => {
    incrementer((prev) => prev + 1);
  };
  return (
    <nav className="border-b border-gray-200">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex gap-x-2 justify-between items-center md:gap-x-6 h-16">
          <button className="inline-block md:hidden" href="#">
            <MenuIcon className="w-6 h-6 text-gray-900" />
          </button>
          <a href="#" className="hidden md:inline-block">
            <Logo />
          </a>
          <ul className="hidden text-gray-700 md:flex md:gap-x-8 md:items-center">
            <li>
              <a href="#">Feed</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          <input
            className="hidden sm:inline-block flex-1 py-1.5 px-4 mx-4 text-gray-700 bg-gray-100 rounded-full border border-gray-100 transition focus:outline-none focus:bg-white focus:border-gray-700"
            type="text"
            placeholder="Search"
          />
          <div className="flex flex-row-reverse gap-x-2 items-center md:gap-x-4 lg:flex-row">
            <button className="hidden lg:inline-block">
              <ConversationIcon className="w-7 h-7" />
            </button>
            <button className="hidden lg:inline-block py-1.5 px-5 rounded-full border border-gray-200">
              Upload
            </button>
            <button className="object-cover overflow-hidden w-10 h-10 rounded-full border border-gray-200">
              <img src="/img/avatar-1.jpeg" alt="" />
            </button>
            <span className="flex gap-x-1 items-center">
              <FireIcon
                onClick={increment(setFires)}
                className="w-7 h-7 hover:cursor-pointer"
              />
              <button className="text-sm leading-none hover:text-indigo-600">
                {fires}
              </button>
            </span>
            <span className="flex gap-x-1 items-center">
              <StarIcon
                onClick={increment(setStars)}
                className="w-7 h-7 hover:cursor-pointer"
              />
              <button className="text-sm leading-none hover:text-indigo-600">
                {stars}
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GalleryNavbar;
