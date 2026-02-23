import clsx from 'clsx';
import { TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppTimePicker({ className, ...rest }: TimePickerProps) {
  return <TimePicker className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
