import React from 'react';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
