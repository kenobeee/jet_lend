import React from 'react';

import style from './style.module.scss';

export const Modal = () => (
    <>
        <div className={style.container}>
            <h3 className={style.title}>
                Согласие с правилами</h3>
            <span className={style.close}/>
        </div>
    </>
);