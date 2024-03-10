import App from './App';
import {AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <ConfigProvider appearance="dark">
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
);
