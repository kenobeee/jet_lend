import React, {useState} from 'react';

import {Button} from 'components/button';
import {Modal} from 'components/modal';

import style from './style.module.scss';

import {AnswerStatus} from 'type';

export const App = () => {
    const [isModalOpened, setModalStatus] = useState<boolean>(false);
    const [answer, setAnswer] = useState<AnswerStatus>(AnswerStatus.fail);

    const alertUser = () => alert('Дейcтвие выполнено');

    const openModal = ():void =>
        answer === AnswerStatus.success
            ? alertUser()
            : setModalStatus(true);

    const closeModal = (status:AnswerStatus):void => {
        setModalStatus(false);
        setAnswer(status);
        setTimeout(() => status === AnswerStatus.success && alertUser(), 300);
    };

    return (
        <div className={style.wrapper}>
            <Button
                handle={openModal}
                text={'Выполнить действие'}/>
            <Modal
                closeModal={closeModal}
                isModalOpened={isModalOpened}/>
        </div>
    );
};