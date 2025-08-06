import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '/sliderimage1.png';
import image2 from '/sliderimage2.png';
import image3 from '/sliderimage3.png';
import image4 from '/sliderimage4.png';
import image5 from '/sliderimage5.png';

const ImageSlider = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <Section>
      <StyledSwiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Wrap>
              <a href="#">
                <img src={img} alt={`Slide ${index + 1}`} />
              </a>
            </Wrap>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
};

export default ImageSlider;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 1100px;
  margin-bottom: 5%;

  .swiper-pagination {
    bottom: 0px;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: rgba(164, 233, 164, 1);
      opacity: 1;
      margin: 0 5px;
      transition: all 0.3s ease;
    }

    .swiper-pagination-bullet-active {
      background: white;
      transform: scale(1.2);
    }
  }

  /* ✅ Adjust bullets for small screens */
  @media (max-width: 600px) {
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      margin: 0 3px;
    }
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  a {
    display: block;
    padding: 2px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 26px 30px -10px rgba(0, 0, 0, 0.69),
      0 16px 10px -10px rgba(0, 0, 0, 0.73);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 1024px) {
      max-height: 350px;
    }

    @media (max-width: 768px) {
      max-height: 280px;
    }

    @media (max-width: 480px) {
      max-height: 200px;
    }
  }

  &:hover a {
    padding: 0;
    border: 2px solid rgba(249, 249, 249, 0.8);
  }
`;
