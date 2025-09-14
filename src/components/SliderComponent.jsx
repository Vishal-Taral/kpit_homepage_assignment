import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/sliderComponent.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

const SliderComponent = ({ data, settings: customSettings, className = '', card_height = '', card_width = '' }) => {
  // Default settings for the slider
  const defaultSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const sliderSettings = { ...defaultSettings, ...customSettings };

  return (
    <div className={`${clsx(styles.slider_container)} ${className}`}>
      <Slider {...sliderSettings}>
        {data?.map((item) => (
          <div key={item.id} className={`${styles.slider_item}`}>
            <div className={`${(card_height || card_width) ? styles.slider_card : styles.autocard} ${card_height} ${card_width}`}>
              <div className={`${clsx((item.title && item.description) ? styles.slider_card__image : styles.slider_card__full_image)}`}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title || 'Slider image'}
                    fill
                    className={styles.image_fill}
                    quality={100}
                    priority={item.id === data[0].id}
                    style={{ objectFit: 'cover' }}
                  />
                ) : null}
              </div>
              {(item.title || item.description) && (
                <div className={styles.slider_card__content}>
                  {item.title && <h3 className={styles.slider_card__title}>{item.title}</h3>}
                  {item.description && <p className={styles.slider_card__description}>{item.description}</p>}
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