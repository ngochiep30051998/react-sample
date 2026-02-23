import clsx from 'clsx';
import { Mentions } from 'antd';
import type { MentionsProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppMentions({ className, ...rest }: MentionsProps) {
  return <Mentions className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
