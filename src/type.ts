
// enums
export enum AnswerStatus {
    success = 'success',
    fail = 'fail'
}

export enum ButtonTypes {
    primary = 'primary',
    secondary = 'secondary'
}

// components
export type ButtonP = {
    text:string,
    handle:() => void,
    className?:string,
    isDisabled?:boolean,
    disableTime?:number,
    type?:ButtonTypes
};

export type ModalP = {
    isModalOpened:boolean,
    closeModal:(status:AnswerStatus) => void
};

// utils
export type MergeClassNamesT = (...args:Array<string>) => string;