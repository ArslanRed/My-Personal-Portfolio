import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../../assets/sliderimage1.png';
import image2 from '../../assets/sliderimage2.png';
import image3 from '../../assets/sliderimage3.png';
import image4 from '../../assets/sliderimage4.png';
import image5 from '../../assets/sliderimage5.png';

const ImageSlider = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <Section>
      <HeadMe>My Websites</HeadMe>
      <StyledSwiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
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
  overflow: hidden;
`;

const HeadMe = styled.h3`
  text-align: center;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    margin-top: 90px;
  }
`;

const StyledSwiper = styled(Swiper)`
  max-width: 1100px;
  width: 100%;
  margin-bottom: 5%;

  .swiper-pagination {
    bottom: 0px;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: rgba(164, 233, 164, 1);
      opacity: 1;
      margin: 0 5px;
    }

    .swiper-pagination-bullet-active {
      background: white;
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

    @media (min-width: 1024px) {
      height: 400px;
    }
  }

  &:hover a {
    padding: 0;
    border: 2px solid rgba(249, 249, 249, 0.8);
  }
`;
