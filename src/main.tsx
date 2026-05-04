import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('App initialization started...');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Failed to find the root element');
  } else {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    console.log('App successfully rendered');
  }
} catch (error) {
  console.error('Initial render error:', error);
  document.body.innerHTML = `<div style="padding: 20px; color: red; font-family: sans-serif;">
    <h1>Application Error</h1>
    <p>The application failed to start. Please check the console for details.</p>
    <pre>${error instanceof Error ? error.stack : String(error)}</pre>
  </div>`;
}
