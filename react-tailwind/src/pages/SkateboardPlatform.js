import React from "react";
import SkateBoardCardPrimary from "../components/SkateBoardCardPrimary";
import SkateBoardNavbar from "../components/SkateBoardNavbar";
import SkateBoardSidebar from "./../components/SkateBoardSidebar";
import SkateBoardCardSecondary from "./../components/SkateBoardCardSecondary";

const primaryCard = [
  {
    title: "How to do Basic Jumping and how to landing safely",
    avatar: "/img/avatar-3.png",
    background: "/img/bg-1.png",
    name: "Thomas Hope",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: "CheckTealIcon",
    duration: "7 min",
  },
  {
    title: "Skateboard Tips You need to know",
    avatar: "/img/avatar-2.png",
    background: "/img/bg-2.png",
    name: "Tony Andrew",
    views: "52K views",
    created_at: "1 weeks ago",
    check_icon: "CheckOrangeIcon",
    duration: "10 min",
  },
];
const secondaryCard = [
  {
    title: "Basic how to ride your skateboard comfortly",
    avatar: "/img/avatar-6.png",
    background: "/img/bg-3.png",
    name: "Andy William",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "green",
    duration: "7 min",
  },
  {
    title: "Prepare for your first skateboard jump",
    avatar: "/img/avatar-4.png",
    background: "/img/bg-7.png",
    name: "Johny Wise",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "orange",
    duration: "7 min",
  },
  {
    title: "Tips to playing skateboard on the ramp",
    avatar: "/img/avatar-8.png",
    background: "/img/bg-6.png",
    name: "Budi Hakim",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "orange",
    duration: "7 min",
  },
  {
    title: "Basic Equipment to play skateboard safely",
    avatar: "/img/avatar-7.png",
    background: "/img/bg-4.png",
    name: "Wijaya Abadi",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "green",
    duration: "7 min",
  },
];

const SkateboardPlatform = () => {
  return (
    <div className="flex font-sans text-white bg-gray-900">
      <div className="flex flex-col min-h-screen w-60">
        <div className="px-8 py-8">
          <h1 className="text-xl font-semibold">skateboard</h1>
        </div>
        <SkateBoardSidebar />
      </div>
      <div className="px-8 py-8 w-full">
        <SkateBoardNavbar />
        <div className="pt-10">
          <h2 className="text-4xl font-semibold">Discover</h2>
          <div className="flex space-x-6 py-7">
            {primaryCard.map((card, index) => {
              return (
                <SkateBoardCardPrimary key={index} card={card} index={index} />
              );
            })}
          </div>
        </div>
        <div className="pt-10">
          <h2 className="text-2xl font-medium">Most watched</h2>
          <div className="flex justify-between py-6">
            {secondaryCard.map((card, index) => {
              return (
                <SkateBoardCardSecondary
                  key={index}
                  card={card}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkateboardPlatform;
