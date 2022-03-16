import React from "react";
import { ReactComponent as CheckBlueIcon } from "../icons/check-blue.svg";

const SkateBoardCardSecondary = ({ card, index }) => {
  return (
    <div className="w-64 rounded-2.5xl overflow-hidden relative">
      <img src={card.background} className="h-50" alt="" />
      <div className="absolute flex items-center justify-center rounded-full right-5 top-34 w-14 h-14">
        <img
          src={card.avatar}
          className="absolute w-12 h-12 rounded-full"
          alt=""
        />
        <span className="absolute inset-0 border rounded-full border-white/50" />
        <CheckBlueIcon class="absolute bottom-0 right-0" />
      </div>
      <span class="px-2 py-0.5 absolute right-2 top-2 text-white rounded-lg bg-gray-900/50 text-xxs">
        7 min
      </span>
      <div className="px-5 py-5 bg-gray-800">
        <div className="flex items-center">
          <span className="text-xs font-normal tracking-wider text-gray-400">
            {card.name}
          </span>
          <span className="w-2 h-2 rounded-full ml-2 ${card.color === 'green' ? 'bg-green' : 'bg-orange' "></span>
        </div>
        <h3 className="inline-block pt-1 font-medium leading-relaxed">
          {card.title}
        </h3>
        <span className="inline-block pt-4 text-sm tracking-wider text-gray-500">
          {card.views} • {card.created_at}
        </span>
      </div>
    </div>
  );
};

export default SkateBoardCardSecondary;
