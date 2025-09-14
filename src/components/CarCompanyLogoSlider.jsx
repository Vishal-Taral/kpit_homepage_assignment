import React from "react";
import SliderComponent from "../commonComponents/SliderComponent";

const CarCompanyLogoSlider = () => {
  const dummyData = [
  {
    id: 1,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-1.svg",
  },
  {
    id: 2,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-2.svg",
  },
  {
    id: 3,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-3.svg",
  },
  {
    id: 4,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-4.svg",
  },
  {
    id: 5,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-5.svg",
  },
  {
    id: 6,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-6.svg",
  },
  {
    id: 7,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-7.svg",
  },
  {
    id: 8,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-8.svg",
  },
  {
    id: 9,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-9.svg",
  },
  {
    id: 10,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-10.svg",
  },
  {
    id: 11,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-11.svg",
  },
  {
    id: 12,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-8.svg",
  },
  {
    id: 13,
    image:
      "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-6.svg",
  },
];

  const customSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
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
      <h3 className="text-center text-4xl font-semibold font">Trusted by mobility <br /> leaders worldwide</h3>
      <SliderComponent
        data={dummyData}
        settings={customSettings}
        className=""
        card_height="h-[6rem]"
        card_width="w-[6rem]"
      />
    </div>
  );
};

export default CarCompanyLogoSlider;
