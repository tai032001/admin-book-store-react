import './App.css';
import {Sach} from './Sach';
import {TaiKhoan} from './TaiKhoan';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App Container">
      <h3 className='d-flex justify-content-center m-3'>Admin Book Store Page</h3>
    
    <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
    <ul className='navbar-nav'>
      <li className='nav-item-m-1'>
      <NavLink className="btn btn-light btn-outline-primary" to="/Sach">
        Home
      </NavLink>
      </li>
      <li className='nav-item-m-1'>
      <NavLink className="btn btn-light btn-outline-primary" to="/TaiKhoan">
        TaiKhoan
      </NavLink>
      </li>
    </ul>
  </nav>
  <Routes>
      <Route path='/Sach' element={<Sach/>}/>;
      <Route path='/Taikhoan' element={<TaiKhoan/>}/>;
  </Routes>
  </div>
  </BrowserRouter>
  );
  
}

export default App;
