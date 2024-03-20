import React from 'react';
import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { InformationContent } from '../InformationContent';

export const Information = () => {
  return (
    <div className={styles.information}>
      <div className={styles.information__container}>
        <h3 className={styles.information__title}>
          Собираем и обрабатываем гранулярные данные на уровне сети
        </h3>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className={styles.mySwiper}>
          <SwiperSlide>
            <InformationContent />
          </SwiperSlide>
          <SwiperSlide>
            <InformationContent />
          </SwiperSlide>
          <SwiperSlide>
            <InformationContent />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
