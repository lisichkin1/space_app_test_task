import React, { useState } from 'react';
import styles from './index.module.scss';
import { Button } from '../../UI/Button';
export const Header = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <nav className={styles.nav}>
          <ul className={styles.nav__container}>
            <li className={styles.nav__item}>
              <a className={styles.nav__item__link}>Главная</a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__item__link}>Продукты</a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__item__link}>Кейсы</a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__item__link}>Экспертное мнение</a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__item__link}>Контакты</a>
            </li>
          </ul>
        </nav>
        <Button className={styles.header__button} text={'Запросить презентацию'} />
      </div>
      <div className={styles.header__container__mobile}>
        <div
          className={styles.menu__mobile__btn__container}
          onClick={() => setMenuActive(!menuActive)}>
          <div className={styles.menu__mobile__btn}>
            <span></span>
          </div>
        </div>

        <div className={`${styles.menu__mobile} ${menuActive ? styles.active : ''}`}>
          <div className={styles.menu__mobile__blur} onClick={() => setMenuActive(false)}></div>
          <nav className={styles.nav__mobile}>
            <ul className={styles.nav__container}>
              <li className={styles.nav__item}>
                <a className={styles.nav__item__link}>Главная</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__item__link}>Продукты</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__item__link}>Кейсы</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__item__link}>Экспертное мнение</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__item__link}>Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
