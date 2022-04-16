import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { FilmProvider } from './context/FilmContext';
import { CharacterProvider } from './context/CharacterContext';
import { SpeciesProvider } from './context/SpeciesContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilmProvider>
    <CharacterProvider>
      <SpeciesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SpeciesProvider>
    </CharacterProvider>
  </FilmProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
