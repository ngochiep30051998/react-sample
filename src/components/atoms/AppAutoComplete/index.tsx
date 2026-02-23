import clsx from 'clsx';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppAutoComplete<OptionType = unknown>({
  className,
  ...rest
}: AutoCompleteProps<OptionType>) {
  return <AutoComplete className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
