import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo.png';
import bglogo from '../../img/logo/bg-logo.png';
import vn from '../../img/logo/vn.jpg';
import en from '../../img/logo/en.jpg';
import search from '../../img/logo/search.png';
import Banner from './Banner';
import "./navbar.css";
const NavBar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.screenY);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [width1, setWidth1] = useState(0);
  const [heigh, setHeight] = useState(0);
  const [margii, setMargin] = useState(0);
  const [heighlogo, setHeightlogo] = useState(0);
  const [heighblogo, setHeightblogo] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos >= currentScrollPos) {
        setTop(2);
        setWidth(14);
        setWidth1(7.5);
        setHeight(12);
        setMargin(7.5);
        setHeightlogo(1);
        setHeightblogo(13.9);
      } else {
        setTop(0);
        setWidth(9);
        setWidth1(4.5);
        setHeight(8);
        setMargin(7.5);
        setHeightlogo(2);
        setHeightblogo(7.9);
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  const navbarStyle = {
    backgroundColor: '#ffffff',
    top: `${top}vh`,
    width: '100%',
    display: 'block',
    transition: 'top 0.3s',
    zIndex: '1',
    paddingBottom: '0',
    height: `${heigh}vh`,
  };

  const logoStyle = {
    top: `${heighlogo}vh`,
    transition: 'top 0.2s',
    transitionTimingFunction: 'ease-in-out',
    width: `${width1}%`,
  };

  const bglogoStyle = {
    transition: 'top 0.1s',
    transitionTimingFunction: 'ease-in-out',
    width: `${width}%`,
    top: `${heighblogo}vh`,
  };

  const HeadText = {
    top: `${margii}rem` ,
  };


  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg shadow" style={navbarStyle}>
        <div className="d-flex justify-content-center ">
          <div className="d-flex grid gap-5 mx-auto" style={HeadText}>
            <p className="p-2 g-col-6 head">TRANG CHỦ</p>
            <p className="p-2 g-col-6 head">GIỚI THIỆU</p>
            <p className="p-2 g-col-6 head">SẢN PHẨM</p>
            <p className="p-2 g-col-6 head">DỊCH VỤ</p>
          </div>
          <div className="d-flex justify-content-center ">
            <img
              src={logo}
              alt="Logo"
              className='over'
              style={logoStyle}
            />
            <img
              src={bglogo}
              alt="Logo"
              className='under'
              style={bglogoStyle}
            />
          </div>
          <div className="d-flex grid gap-5 mx-auto" style={HeadText}>
            <p className="p-2 g-col-6 head">TIN TỨC</p>
            <p className="p-2 g-col-6 head">TUYỂN DỤNG</p>
            <p className="p-2 g-col-6 head">LIÊN HỆ</p>
          </div>
          <div className="d-flex grid gap-1 me-5" style={HeadText}>
            <img
              src={search}
              alt="Search"
              className="p-2"
              height={30}
            />
            <img
              src={vn}
              alt="Vietnam Flag"
              className="p-2"
              height={30}
            />
            <img
              src={en}
              alt="UK Flag"
              className="p-2"
              height={30}
            />
          </div>
        </div>
      </nav>
      <Banner />
    </>
  );
};

export default NavBar;