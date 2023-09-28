import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // react-redux에서 Provider를 import합니다.
// import store from './path-to-your-configStore'; // 스토어 설정 파일 경로를 정확하게 지정하세요.
import store from './redux/configStore';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    {/* Provider 컴포넌트로 Redux 스토어를 제공합니다. */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
