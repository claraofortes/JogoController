import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Game } from './pages/game/index';
import { GameEditor } from './pages/game/editor';
import { Kind } from './pages/kind/index';
import { KindEditor } from './pages/kind/editor';
import { Objective } from './pages/objective/index';
import { ObjectiveEditor } from './pages/objective/editor';
import { Platform} from './pages/platform/index';
import { PlatformEditor } from './pages/platform/editor';
import { Type } from './pages/type/index';
import { TypeEditor } from './pages/type/editor';
import { Header } from './components/header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/game/:id' element={<GameEditor/>}/>
        <Route path='/kind' element={<Kind/>}/>
        <Route path='/kind/:id' element={<KindEditor/>}/>
        <Route path='/objective' element={<Objective/>}/>
        <Route path='/objective/:id' element={<ObjectiveEditor/>}/>
        <Route path='/platform' element={<Platform/>}/>
        <Route path='/platform/:id' element={<PlatformEditor/>}/>
        <Route path='/type' element={<Type/>}/>
        <Route path='/type/:id' element={<TypeEditor/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
