import type { Meta, StoryObj } from '@storybook/react-vite';
import AppTypography from '@atoms/AppTypography';

const meta: Meta<typeof AppTypography> = {
  title: 'Atoms/AppTypography',
  component: AppTypography,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppTypography>;

export const Title: Story = {
  render: () => (
    <>
      <AppTypography.Title level={1}>h1</AppTypography.Title>
      <AppTypography.Title level={2}>h2</AppTypography.Title>
      <AppTypography.Title level={3}>h3</AppTypography.Title>
    </>
  ),
};
export const Text: Story = {
  render: () => (
    <>
      <AppTypography.Text>Default</AppTypography.Text>
      <br />
      <AppTypography.Text type="secondary">Secondary</AppTypography.Text>
    </>
  ),
};
