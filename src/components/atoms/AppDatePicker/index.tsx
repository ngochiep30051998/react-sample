import clsx from 'clsx';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

function AppDatePickerComponent({ className, ...rest }: DatePickerProps) {
  return <DatePicker className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}

AppDatePickerComponent.RangePicker = DatePicker.RangePicker;
export default AppDatePickerComponent;
