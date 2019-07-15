import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import GifsList from './components/GifsList/GifsList';
import configureStore from './store/configureStore';
const store = configureStore();

function App() {
  return (
    <Provider store = { store }>
      <Header header="Giphy Browser"/>
      <GifsList/>
    </Provider>
  );
}

export default App;
