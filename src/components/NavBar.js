import React from "react";
import logo from "../img/logo/logo.png";
import vn from "../img/logo/vn.jpg";
import en from "../img/logo/en.jpg";
import search from "../img/logo/search.png";
import banner from '../img/logo/banner.jpg';
import { Link} from 'react-router-dom';

function NavBar() {
    
  return (
    <div>
      <div
        id="sticky-wrapper"
        className="sticky-wrapper"
        style={{ height: 55 }}
      >
        <header style={{ width: 1360 }}>
          <div className="container">
            <div className="logo" style={{backgroundImage: "url('../img/logo/bg-logo.png')"}}>
              <a href="#trangchu.html" title="GEMACHEM JSC">
                <img src={logo} alt="GEMACHEM JSC" />
              </a>
            </div>
            <div id="sticker" className="">
              <div className="stick-container">
                <div className="overlayer" />
                <div className="wrapper">
                  <div className="head-wrapper">
                    <p>Menu</p>
                    <div id="close-menu">
                      <span />
                    </div>
                    <div className="mb-search">
                      <form action="#">
                        <input type="text" placeholder="Tìm kiếm ..." />
                        <button>
                          <span />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="body-wrapper">
                    <ul>
                      <li><Link to={"/"}>Trang chủ</Link></li>
                      <li><Link to={"/gioithieu"}>Giới thiệu</Link></li>
                      <li><Link to={"/sanpham"}>Sản phẩm</Link>
                      <ul>
                        <li>
                          <Link to={"/sanpham2"}>Sản phẩm 2</Link>
                          </li>
                          <li>
                          <Link to={"/sanpham3"}>Sản phẩm 3</Link>
                        </li>
                      </ul>
                      </li>
                      <li>
                      <Link to={"/dichvu"}>Dịch vụ</Link>
                      </li>
                      <li><Link to={"/tintuc"}>Tin tức</Link> </li>
                      <li><Link to={"/tuyendung"}>Tuyển dụng</Link></li>
                      <li><Link to={"/lienhe"}>Liên hệ</Link></li>
                      <li>
                        <a href="#" title="Tìm kiếm">
                          <img src={search} alt="Tìm kiếm" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="language">
              <ul>
                <li>
                  <a href="#">
                    <img src={vn} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={en} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div id="open-menu">
              <span />
            </div>
          </div>
        </header>
      </div>
      <div id="banner">
    <div className="slide-banner">
      <a href="#san-pham.html" title="banner">
        <img src={banner} alt="banner" />
      </a>
    </div>
  </div>
    </div>
  );
}

export default NavBar;
