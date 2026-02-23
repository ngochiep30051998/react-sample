import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

function AppDatePickerComponent({ className, ...rest }: DatePickerProps) {
  return <DatePicker className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}

AppDatePickerComponent.RangePicker = DatePicker.RangePicker;
export default AppDatePickerComponent;
