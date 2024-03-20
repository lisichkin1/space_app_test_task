import React from 'react';
import styles from './index.module.scss';
import { QuartalChart } from '../../UI/LineChart/LineChart';
import { Button } from '../../UI/Button';
import { RadialChart } from '../../UI/RadialChart/RadialChart';

export const Stat = () => {
  return (
    <div className={styles.stat}>
      <div className={styles.stat__container}>
        <div className={styles.stat__left}>
          <h3 className={styles.stat__title}>Промо-давление увеличивается</h3>
          <div className={styles.stat__chart__container}>
            <div className={styles.stat__chart}>
              <QuartalChart />
            </div>
          </div>
          <Button className={styles.stat__button} text={'Почему величивается?'} />
        </div>
        <div className={styles.stat__right}>
          <h3 className={styles.stat__title}>80% данных не используется производителями</h3>
          <div
            className={`${styles.stat__chart__container} ${styles.stat__chart__container__margin}`}>
            <div className={styles.stat__chart}>
              <RadialChart />
            </div>
          </div>
          <div className={styles.stat__right__img} />
        </div>
      </div>
    </div>
  );
};
