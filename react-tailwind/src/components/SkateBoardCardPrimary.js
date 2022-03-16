import React from "react";
import { ReactComponent as CheckTealIcon } from "../icons/check-teal.svg";
import { ReactComponent as CheckOrangeIcon } from "../icons/check-orange.svg";

const SkateBoardCardPrimary = ({ card, index }) => {
  return (
    <div
      className={`h-96 rounded-2.5xl p-10 bg-no-repeat bg-cover overflow-hidden relative ${
        index === 0 ? "w-2/3" : "w-1/3"
      }`}
      style={{
        backgroundImage: `url(${card.background})`,
      }}
    >
      <h3 className="text-3xl font-semibold max-w-xxs">{card.title}</h3>
      <div className="flex flex-wrap-reverse items-center pt-4 pr-24">
        <div className="relative flex items-center justify-center rounded-full w-14 h-14">
          <img src={card.avatar} className="w-12 h-12 rounded-full" alt="" />
          <span className="absolute inset-0 border rounded-full border-white/50" />
          {index === 0 ? (
            <CheckTealIcon className="absolute bottom-0 right-0" />
          ) : (
            <CheckOrangeIcon className="absolute bottom-0 right-0" />
          )}
        </div>
        <div className="flex flex-col py-4 pl-2">
          <a className="font-medium tracking-wider" href="#">
            {" "}
            {card.name}{" "}
          </a>
          <span className="text-xs tracking-wider text-white/80">
            {card.views} • {card.created_at}
          </span>
        </div>
        <span class="px-2 py-0.5 absolute right-5 bottom-5 rounded-lg bg-gray-900/50 text-xxs">
          {card.duration}
        </span>
      </div>
    </div>
  );
};

export default SkateBoardCardPrimary;
