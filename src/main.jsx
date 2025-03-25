// Import React's StrictMode for highlighting potential problems in the app
import { StrictMode } from 'react';

// Import createRoot to render the React app into the DOM
import { createRoot } from 'react-dom/client';

// Import global CSS styles
import './index.css';

// Import the main App component
import App from './App'; // No need for curly braces, as App is a default export
import { GoogleOAuthProvider } from '@react-oauth/google';

// Get the root element from the HTML file
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <GoogleOAuthProvider clientId="732263880290-4c0784kgcoar8rbk8kt30scq94pa07nd.apps.googleusercontent.com">
  <App />
</GoogleOAuthProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
