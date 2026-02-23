import { Mentions } from 'antd';
import type { MentionsProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppMentions({ className, ...rest }: MentionsProps) {
  return <Mentions className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
