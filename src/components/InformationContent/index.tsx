import React from 'react';
import styles from './index.module.scss';
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
              url={'/assets/icons/balls.svg'}
              width={'37px'}
              height={'37px'}
            />
            <p>Мы используем точные алгоритмы и машинное обучение</p>
          </li>
          <li className={styles.information__list__item}>
            <IconUI
              className={`${styles.information__icon} ${styles.information__icon_padding}`}
              url={'/assets/icons/data.svg'}
              width={'37px'}
              height={'37px'}
            />
            <p>Консолидируем, проверяем, визуализируем и интерпретируем информацию.</p>
          </li>
          <li className={styles.information__list__item}>
            <IconUI
              className={`${styles.information__icon} ${styles.information__icon_padding}`}
              url={'/assets/icons/bag.svg'}
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
            <img src="/assets/icons/arrow.svg" />
            <span>Еженедельные</span>
          </li>
          <li className={styles.information__list__item__right}>
            <span>Сырые данные</span>
            <img src="/assets/icons/arrow.svg" />
            <span className={styles.information__text__wrap}>Промо/регулярные</span>
          </li>
          <li className={styles.information__list__item__right}>
            <span>
              Промо/ <br /> регулярные
            </span>
            <img src="/assets/icons/arrow.svg" />
            <span>
              Базовые/ <br /> Инкрементальные
            </span>
          </li>
          <li className={styles.information__list__item__right}>
            <span>Дистрибуция</span>
            <img src="/assets/icons/arrow.svg" />
            <span>
              Конкретное <br /> окружение
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
};
