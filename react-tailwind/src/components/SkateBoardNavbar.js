import React from "react";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as ChevronDownIcon } from "../icons/chevron-down.svg";
import { ReactComponent as NotificationIcon } from "../icons/notification.svg";

const SkateBoardNavbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative flex flex-1 max-w-xl">
        <input
          className="items-center w-full h-10 px-4 text-sm font-normal tracking-wider text-white placeholder-gray-500 bg-white/10 rounded-xl focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-6">
          <SearchIcon className="text-gray-500 stroke-current" />
        </div>
      </div>
      <div className="flex items-center">
        <img src="/img/avatar-1.png" alt="" className="w-8 h-8 rounded-full" />
        <a className="flex items-center justify-center px-4" href="#">
          <span className="text-xs font-normal tracking-widest">Thomas</span>
          <ChevronDownIcon className="text-gray-500 stroke-current" />
        </a>
        <button className="pl-8 p-0.5 relative">
          <NotificationIcon className="text-gray-500 stroke-current" />
          <span className="absolute top-0 w-2 h-2 bg-red-500 border border-gray-900 rounded-full right-1"></span>
        </button>
      </div>
    </div>
  );
};

export default SkateBoardNavbar;
