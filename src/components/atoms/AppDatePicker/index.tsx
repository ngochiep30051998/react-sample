import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppDatePicker({ className, ...rest }: DatePickerProps) {
  return <DatePicker className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
