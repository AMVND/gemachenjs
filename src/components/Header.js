import React from 'react'
import NavBar from './NavBar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import GioiThieu from './GioiThieu';
import SanPham from './SanPham';
import SanPham2 from './SanPham2';
import SanPham3 from './SanPham3';
import DichVu from './DichVu';
import TinTuc from './TinTuc';
import TuyenDung from './TuyenDung';
import LienHe from './LienHe';
function Header() {
  return (
    <div>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gioithieu" element={<GioiThieu/>}/>
            <Route path="/sanpham" element={<SanPham/>}/>
            <Route path="/sanpham2" element={<SanPham2/>}/>
            <Route path="/sanpham3" element={<SanPham3/>}/>
            <Route path="/dichvu" element={<DichVu/>}/>
            <Route path="/tintuc" element={<TinTuc/>}/>
            <Route path="/tuyendung" element={<TuyenDung/>}/>
            <Route path="/lienhe" element={<LienHe/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Header