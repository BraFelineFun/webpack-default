import React from 'react';
import styles from './user-card.module.css';
export const UserCard = ({id = 0}) => {
  return (
    <div className={styles['user-card']}>
      {/*<div className={styles["user-card__logo"]}></div>*/}
      {/*<div className={styles["user-card__name"]}>*/}
      {/*  My name is {id}!*/}
      {/*</div>*/}
    </div>
  );
};