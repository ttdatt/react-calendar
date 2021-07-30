import React, { memo, useMemo } from 'react';

import { CSSProps, MonthCell, MonthIndices } from '../../utils/types';

import { getMonthViewMetrix } from '../../utils/date-utils';
import { NATIVE_INDEX_TO_LABEL_MONTHS_MAP } from '../../utils/constants';

interface Props {
  onChangeViewType: (view: 'month_dates' | 'months' | 'years') => unknown;
  onChangeViewingMonth: (month: MonthIndices) => unknown;
  layoutCalcs: CSSProps;
  inFocus: boolean;
  focusedMonth: MonthIndices;
}

function MonthSelectorComponent({ onChangeViewingMonth, onChangeViewType, layoutCalcs, focusedMonth, inFocus }: Props) {
  const monthsViewMatrix = useMemo<MonthCell[][]>(() => {
    return getMonthViewMetrix({});
  }, []);

  return (
    <div style={layoutCalcs.root['arc_view-months']} className="arc_view-months">
      {monthsViewMatrix.map((row, index) => (
        <div style={layoutCalcs.months.arc_view_row} className="arc_view_row" key={index}>
          {row.map((cell) => (
            <div
              style={layoutCalcs.months.arc_view_cell}
              className={`arc_view_cell${cell.isCurrentMonth ? ' arc_this_month' : ''}${
                inFocus && cell.month === focusedMonth ? ' arc_focused' : ''
              }`}
              key={cell.month}
            >
              <button
                autoFocus={inFocus && cell.month === focusedMonth}
                style={layoutCalcs.months.arc_view_cell_value_button}
                onClick={() => {
                  onChangeViewingMonth(cell.month);
                  onChangeViewType('month_dates');
                }}
              >
                {NATIVE_INDEX_TO_LABEL_MONTHS_MAP[cell.month]}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export const MonthSelector = memo(MonthSelectorComponent);
