import React from 'react';

import Routes from './routes'

import api from './services/api'



import './styles.css'

import Header from './components/Header'
import Main from './pages/Main'


const App = () => (
      <div className="App">
        <Header />
        <Routes />
      </div>
)



export default App;
