import React from 'react';
import { CSSProps, MonthIndices } from '../../utils/types';
interface Props {
    onChangeViewType: (view: 'month_dates' | 'months' | 'years') => unknown;
    onChangeViewingMonth: (month: MonthIndices) => unknown;
    layoutCalcs: CSSProps;
    inFocus: boolean;
    focusedMonth: MonthIndices;
}
declare function MonthSelectorComponent({ onChangeViewingMonth, onChangeViewType, layoutCalcs, focusedMonth, inFocus }: Props): JSX.Element;
export declare const MonthSelector: React.MemoExoticComponent<typeof MonthSelectorComponent>;
export {};
