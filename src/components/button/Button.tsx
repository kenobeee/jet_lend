import React, {useMemo} from 'react';

import {mergeClassNames} from 'utils';

import style from './style.module.scss';

import {ButtonP, ButtonTypes} from 'type';

export const Button = (props:ButtonP) => useMemo(() => {
    const {isDisabled, disableTime = 0, className = '', text, handle, type = ButtonTypes.primary} = props;

    const getButtonClasses = () =>
        mergeClassNames(
            style.button,
            type === ButtonTypes.primary ? style.buttonPrimary : style.buttonSecondary,
            className
        );

    const btnValue = !!disableTime ? `${text} (${disableTime})` : text;

    return (
        <button
            disabled={isDisabled || !!disableTime}
            className={getButtonClasses()}
            onClick={handle}>{btnValue}</button>
    );
}, [props.disableTime, props.isDisabled, props.handle]);