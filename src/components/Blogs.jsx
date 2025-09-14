import React from "react";
import SliderComponent from "./SliderComponent";

const Blogs = () => {
  const dummyData = [
    {
      id: 1,
      title: "Card One",
      description: "This is a short description for card one.",
      image: "/assets/card1.jpg",
    },
    {
      id: 2,
      title: "Card Two",
      description: "This is a short description for card two.",
      image: "/assets/card2.png",
    },
    {
      id: 3,
      title: "Card Three",
      description: "This is a short description for card three.",
      image: "/assets/card3.png",
    },
  ];

  const customSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <SliderComponent
        data={dummyData}
        settings={customSettings}
        className=""
        card_height="h-[10rem]"
        card_width="w-[35rem]"
      />
    </div>
  );
};

export default Blogs;
