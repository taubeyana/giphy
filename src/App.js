import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import GiphyBrowser from './components/GiphyBrowser/GiphyBrowser';
import configureStore from './store/configureStore';
const store = configureStore();

function App() {
  return (
    <Provider store = { store }>
      <GiphyBrowser/>
    </Provider>
  );
}

export default App;
