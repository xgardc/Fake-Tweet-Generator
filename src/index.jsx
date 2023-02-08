import ReactDOM from 'react-dom/client';

import { TweetContextProvider } from './context/tweet';

import App from './App';

import './i18n';

import './styles.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <TweetContextProvider>
    <App />
  </TweetContextProvider>
);
