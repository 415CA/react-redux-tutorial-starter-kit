import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import { getReadableStories } from './selectors';
import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App 
      stories={getReadableStories(store.getState())}
      onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
    />,
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(store.getState())
console.log(getReadableStories(store.getState()))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
