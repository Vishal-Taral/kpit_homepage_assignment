import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const SliderComponent = ({ data, settings: customSettings, className = '', card_height = 'h-auto', card_width = 'w-full' }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1536, // 2xl screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // xs screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderSettings = { ...defaultSettings, ...customSettings };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <Slider {...sliderSettings}>
        {data?.map((item, index) => (
          <div key={item.id} className="px-2 sm:px-3">
            <div
              className={`flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-md border border-gray-300 transition-transform duration-300 ${card_height} ${card_width} max-w-[18rem] sm:max-w-[22rem] md:max-w-[24rem] lg:max-w-[26rem] mx-auto`}
            >
              <div
                className={`relative ${
                  item.title && item.description ? 'w-full sm:w-2/5' : 'w-full'
                } aspect-[4/3]`}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title || `Slider image ${item.id}`}
                    fill
                    className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                    quality={100}
                    priority={index === 0}
                  />
                )}
              </div>
              {(item.title || item.description) && (
                <div className="w-full sm:w-3/5 p-4 sm:p-5 flex flex-col justify-center">
                  {item.title && (
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-3">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;