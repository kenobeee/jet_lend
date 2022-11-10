import React, {useEffect, useState} from 'react';

import {Button} from 'components/button';

import {mergeClassNames} from 'utils';

import style from './style.module.scss';

import {AnswerStatus, ButtonTypes, ModalP} from 'type';

export const Modal = (props:ModalP) => {
    const {isModalOpened, closeModal} = props;
    const initTimer = 5;

    const [timer, setTimer] = useState<number>(initTimer);

    let interval:NodeJS.Timeout;

    useEffect(() => {
        if (isModalOpened && timer > 0) {
            interval = setTimeout(() =>
                setTimer(timer - 1), 1000);

            return () => clearInterval(interval);
        }

        return undefined;
    }, [timer, isModalOpened]);

    const close = (status:AnswerStatus):void => {
        setTimeout(() => setTimer(initTimer), 300);
        closeModal(status);
    };

    const getOuterStyles = () =>
        mergeClassNames(
            style.outer,
            isModalOpened ? style.outerActive : ''
        );

    return (
        <>
            <div className={getOuterStyles()}>
                <div className={style.inner}>
                    <div className={style.header}>
                        <h3 className={style.title}>
                                Согласие с правилами</h3>
                        <span
                            className={style.close}
                            onClick={() => close(AnswerStatus.fail)}/>
                    </div>
                    <p className={style.text}>Для данной функции применяются особые условия и правила пользования,
                        их необходимо подтвердить, нажав на кнопку <strong>Подтвердить</strong></p>
                    <div className={style.resolvers}>
                        <Button
                            text={'Отмена'}
                            type={ButtonTypes.secondary}
                            className={style.resolver}
                            handle={() => close(AnswerStatus.fail)}/>
                        <Button
                            disableTime={timer}
                            text={'Подтвердить'}
                            className={style.resolver}
                            handle={() => close(AnswerStatus.success)}/>
                    </div>
                </div>
            </div>
        </>
    );
};