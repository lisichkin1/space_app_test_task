import React from 'react';
import styles from './index.module.scss';
import Bag from '../../../public/assets/icons/bag.svg';
import Arrow from '../../../public/assets/icons/arrow.svg';
import Data from '../../../public/assets/icons/data.svg';
import Balls from '../../../public/assets/icons/balls.svg';
import { IconUI } from '../../UI/IconUI';
export const InformationContent = () => {
  return (
    <article className={styles.information__content}>
      <div className={styles.information__left}>
        <div className={styles.information__subtitle}>
          <span>1</span>
          <h4>Обработка данных</h4>
        </div>
        <ul className={styles.information__list}>
          <li className={styles.information__list__item}>
            <IconUI
              className={`${styles.information__icon} ${styles.information__icon_padding}`}
              url={Balls}
              width={'37px'}
              height={'37px'}
            />
            <p>Мы используем точные алгоритмы и машинное обучение</p>
          </li>
          <li className={styles.information__list__item}>
            <IconUI
              className={`${styles.information__icon} ${styles.information__icon_padding}`}
              url={Data}
              width={'37px'}
              height={'37px'}
            />
            <p>Консолидируем, проверяем, визуализируем и интерпретируем информацию.</p>
          </li>
          <li className={styles.information__list__item}>
            <IconUI
              className={`${styles.information__icon} ${styles.information__icon_padding}`}
              url={Bag}
              width={'37px'}
              height={'37px'}
            />
            <p>Разрабатываем рекомендации для эффективной промо-стратегии и тактических решений</p>
          </li>
        </ul>
      </div>
      <div className={styles.information__right}>
        <div className={styles.information__subtitle}>
          <span>2</span>
          <h4>Преобразование данных</h4>
        </div>
        <ul className={styles.information__list__right}>
          <li className={styles.information__list__item__right}>
            <span>Ежемесячные</span>
            <img src={Arrow} />
            <span>Еженедельные</span>
          </li>
          <li className={styles.information__list__item__right}>
            <span>Сырые данные</span>
            <img src={Arrow} />
            <span className={styles.information__text__wrap}>Промо/регулярные</span>
          </li>
          <li className={styles.information__list__item__right}>
            <span>
              Промо/ <br /> регулярные
            </span>
            <img src={Arrow} />
            <span>
              Базовые/ <br /> Инкрементальные
            </span>
          </li>
          <li className={styles.information__list__item__right}>
            <span>Дистрибуция</span>
            <img src={Arrow} />
            <span>
              Конкретное <br /> окружение
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
};
