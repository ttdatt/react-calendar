import React from 'react';
import { CSSProps } from '../../utils/types';
interface Props {
    onChangeViewType: (view: 'month_dates' | 'months' | 'years') => unknown;
    onChangeViewingYear: (year: number) => unknown;
    yearMatrixStart: number;
    yearMatrixEnd: number;
    layoutCalcs: CSSProps;
    inFocus: boolean;
    focusedYear: number;
}
declare function YearSelectorComponent({ onChangeViewType, onChangeViewingYear, yearMatrixStart, layoutCalcs, inFocus, focusedYear, }: Props): JSX.Element;
export declare const YearSelector: React.MemoExoticComponent<typeof YearSelectorComponent>;
export {};
