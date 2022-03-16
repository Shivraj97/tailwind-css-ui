import React from "react";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as ArrowRightIcon } from "../icons/arrow-right.svg";
import { ReactComponent as DownloadIcon } from "../icons/download.svg";
import { ReactComponent as PaperDownloadIcon } from "../icons/paper-download.svg";
import { ReactComponent as WalletIcon } from "../icons/wallet.svg";

const sidebarMenu = [
  {
    label: "Menu",
    children: [
      { name: "Discover", icon: <HomeIcon className="fill-current" /> },
      { name: "Trending", icon: <ArrowRightIcon className="fill-current" /> },
      { name: "Streaming", icon: <DownloadIcon className="fill-current" /> },
      {
        name: "Playlist",
        icon: <PaperDownloadIcon className="fill-current" />,
      },
      { name: "Bookmark", icon: <WalletIcon className="fill-current" /> },
    ],
  },
  {
    label: "Category",
    children: [
      { name: "Live Stream", icon: <HomeIcon className="fill-current" /> },
      { name: "Tutorial", icon: <ArrowRightIcon className="fill-current" /> },
      { name: "Competition", icon: <DownloadIcon className="fill-current" /> },
      {
        name: "Community",
        icon: <PaperDownloadIcon className="fill-current" />,
      },
    ],
  },
];

const SkateBoardSidebar = () => {
  return (
    <div className="px-8 pt-2 -mt-10 divide-y divide-gray-800">
      {sidebarMenu.map((group, idx) => {
        return (
          <div className="py-10" key={idx}>
            <span className="tracking-widest text-gray-500 uppercase text-xxs">
              {group.label}
            </span>{" "}
            <ul className="flex flex-col pt-5 space-y-8">
              {group.children.map((menu, index) => {
                return (
                  <li className="flex items-center space-x-4 group" key={index}>
                    <span className="p-2 text-gray-500 bg-gray-800 rounded-xl group-hover:text-white group-hover:bg-orange">
                      {menu.icon}
                    </span>
                    <a
                      href="#"
                      className="text-sm text-gray-500 group-hover:text-white group-hover:font-semibold group-hover:tracking-wide"
                    >
                      {menu.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SkateBoardSidebar;
