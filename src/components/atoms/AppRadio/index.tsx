import { Radio } from 'antd';
import type { RadioGroupProps } from 'antd';

export default function AppRadio(props: RadioGroupProps) {
  return <Radio.Group {...props} />;
}
