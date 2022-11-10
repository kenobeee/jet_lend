import {MergeClassNamesT} from '../type';

export const mergeClassNames:MergeClassNamesT = (...args) => args.join(' ');