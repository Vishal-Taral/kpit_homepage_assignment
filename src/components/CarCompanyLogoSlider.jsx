import React from 'react';
import SliderComponent from '../commonComponents/SliderComponent';
import Image from 'next/image';

const CarCompanyLogoSlider = () => {
  const dummyData = [
    {
      id: 1,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-1.svg',
    },
    {
      id: 2,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-2.svg',
    },
    {
      id: 3,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-3.svg',
    },
    {
      id: 4,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-4.svg',
    },
    {
      id: 5,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-5.svg',
    },
    {
      id: 6,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-6.svg',
    },
    {
      id: 7,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-7.svg',
    },
    {
      id: 8,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-8.svg',
    },
    {
      id: 9,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-9.svg',
    },
    {
      id: 10,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-10.svg',
    },
    {
      id: 11,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-11.svg',
    },
    {
      id: 12,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-8.svg',
    },
    {
      id: 13,
      image: 'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/partner-6.svg',
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
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 lg:mb-8">
        Trusted by mobility <br className="sm:hidden" /> leaders worldwide
      </h3>
      <SliderComponent
        data={dummyData}
        settings={customSettings}
        className="mx-auto max-w-screen-xl"
        card_height="h-16 sm:h-20 lg:h-24"
        card_width="w-16 sm:w-20 lg:w-24"
        renderItem={(item) => (
          <div className="flex justify-center items-center">
            <Image
              src={item.image}
              alt={`Partner logo ${item.id}`}
              width={96}
              height={96}
              className="object-contain w-full h-full"
            />
          </div>
        )}
      />
    </div>
  );
};

export default CarCompanyLogoSlider;