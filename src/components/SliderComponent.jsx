import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/sliderComponent.module.scss";
import Image from "next/image";

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
  }
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {dummyData.map((item) => (
          <div key={item.id}>
            <div className={styles.slider_card}>
              <div className={styles.slider_card__image}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image_fill}
                  quality={100}
                  priority
                />
              </div>
              <div className={styles.slider_card__content}>
                <h3 className={styles.slider_card__title}>{item.title}</h3>
                <p className={styles.slider_card__description}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
