import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {render} from 'react-dom';
//all routes
import App from './App'; //home page
import Login from './pages/login'
import Register from './pages/register'
import Cars from './pages/cars'
import Articles from './pages/articles'
import Discounts from './pages/discounts'
import Account from './pages/account'

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="cars" element={<Cars/>}/>
      <Route path="articles" element={<Articles/>}/>
      <Route path="discounts" element={<Discounts/>}/>
      <Route path="account" element={<Account/>}/>
      <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
