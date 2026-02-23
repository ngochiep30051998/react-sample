import type { Preview } from '@storybook/react-vite';
import { ConfigProvider, App } from 'antd';
import React from 'react';
import '../src/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#667eea',
            borderRadius: 8,
          },
        }}
      >
        <App>
          <div style={{ padding: '24px' }}>
            <Story />
          </div>
        </App>
      </ConfigProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    layout: 'centered',
  },
};

export default preview;
