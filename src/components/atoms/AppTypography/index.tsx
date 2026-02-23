import { Typography } from 'antd';
import type { TypographyProps } from 'antd';

const { Title, Text, Paragraph } = Typography;

export default function AppTypography(props: TypographyProps) {
  return <Typography {...props} />;
}

AppTypography.Title = Title;
AppTypography.Text = Text;
AppTypography.Paragraph = Paragraph;
