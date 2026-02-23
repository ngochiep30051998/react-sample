import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppAutoComplete<OptionType = unknown>({
  className,
  ...rest
}: AutoCompleteProps<OptionType>) {
  return <AutoComplete className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
