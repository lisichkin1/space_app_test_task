import React from 'react';
import Data from '../../../public/assets/icons/data.svg';
import Logo from '../../../public/assets/icons/Group102.svg';
import Balls from '../../../public/assets/icons/balls.svg';
import Stat from '../../../public/assets/icons/stat.svg';
import Money from '../../../public/assets/icons/money.svg';

import styles from './index.module.scss';
import { IconUI } from '../../UI/IconUI';
export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <img className={styles.logo} src={Logo} alt="За стеклом" width="452px" height="80px" />
        <div className={styles.banner__content}>
          <h2 className={styles.banner__title}>AI-Driven Analytics Platform</h2>
          <div className={styles.banner__cards}>
            <div className={styles.banner__cards__left}>
              <IconUI
                className={styles.banner__cards__icon}
                url={Data}
                width={'47px'}
                height={'47px'}
              />

              <span
                className={`${styles.banner__cards__title} ${styles.banner__cards__title_margin}`}>
                Обработка данных
              </span>
              <p className={styles.banner__cards__text}>
                Мы помогаем клиентам подобрать необходимые источники данных (через Pop UP нужно
                показать логотипы: Все ОФД, Nielsen, Едадил, СкидкиОнлайн). Валидируем и
                верифицируем их. Приводим их к единому формату и классификатору.{' '}
              </p>
            </div>
            <div className={styles.banner__cards__right}>
              <div className={styles.banner__cards__item}>
                <IconUI
                  className={`${styles.banner__cards__icon} ${styles.banner__cards__icon_padding}`}
                  url={Balls}
                  width={'37px'}
                  height={'37px'}
                />
                <span>Анализ</span>
              </div>
              <div className={styles.banner__cards__item}>
                <IconUI
                  className={`${styles.banner__cards__icon} ${styles.banner__cards__icon_padding}`}
                  url={Stat}
                  width={'37px'}
                  height={'37px'}
                />
                <span>Визуализация</span>
              </div>
              <div className={styles.banner__cards__item}>
                <IconUI
                  className={`${styles.banner__cards__icon} ${styles.banner__cards__icon_padding}`}
                  url={Money}
                  width={'37px'}
                  height={'37px'}
                />
                <span>Интерпретация</span>
              </div>
            </div>
          </div>
          <div className={styles.banner__topground}></div>
        </div>
      </div>
    </div>
  );
};
