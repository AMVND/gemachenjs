import React from 'react'
import dt1 from '../img/doitac/dt-1.png';
import dt2 from '../img/doitac/dt-2.png';
import dt3 from '../img/doitac/dt-3.png';
import dt4 from '../img/doitac/dt-4.png';
import dt5 from '../img/doitac/dt-5.png';
import dt6 from '../img/doitac/dt-6.png';
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaGooglePlusSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div>
    <footer>
    <div className="slide-panter">
      <div className="container">
        <div className="simply-scroll simply-scroll-container">
          <div className="simply-scroll-clip">
            <ul className="simply-scroll-list" style={{ width: 2470 }}>
              <li>
                <a href="#" title="dt-1">
                  <img src={dt1} alt="dt-1" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-2">
                  <img src={dt2} alt="dt-2" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-3">
                  <img src={dt3} alt="dt-3" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-4">
                  <img src={dt4} alt="dt-4" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-5">
                  <img src={dt5} alt="dt-5" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-6">
                  <img src={dt6} alt="dt-6" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-1">
                  <img src={dt1} alt="dt-1" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-2">
                  <img src={dt2} alt="dt-2" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-3">
                  <img src={dt3} alt="dt-3" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-4">
                  <img src={dt4} alt="dt-4" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-5">
                  <img src={dt5} alt="dt-5" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-6">
                  <img src={dt6} alt="dt-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="container">
        <div className="box">
          <p className="tit">Công Ty Cp GEMACHEM Việt Nam</p>
          <div className="list-ft">
            <p>
              <b>Trụ sở:</b> Số 203 Ngô Gia Tự, Phường Đức Giang, Quận Long
              Biên, Hà Nội, Việt Nam
            </p>
            <p>
              <b>VPGD:</b> Số 46 Ngô Quyền, Phường Hàng Bài, Quận Hoàn Kiếm, Hà
              Nội, Việt Nam
            </p>
            <p>
              <b>Điện thoại:</b> 008424392333254 - <b>Fax:</b> 00842439387667
            </p>
            <p>
              <b>Email:</b> contact@gemachem.com.vn
            </p>
            <p>
              <b>Website:</b> www.gemachem.com.vn
            </p>
          </div>
        </div>
        <div className="box">
          <p className="tit">Danh mục</p>
          <ul>
            <li>
              <a href="#" title="Giới thiệu">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" title="Sản phẩm">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="#" title="Dịch vụ">
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="#" title="Tin tức">
                Tin tức
              </a>
            </li>
            <li>
              <a href="#" title="Tuyển dụng">
                Tuyển dụng
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <p className="tit">Đăng ký nhận tin định kỳ</p>
          <div className="form-footer">
            <form action="#">
              <input type="text" placeholder="Nhập email của bạn" />
              <button className="ic-fly" />
            </form>
          </div>
          <ul class="list-social">
                <li>
                  <a href="#" title="Facebook"><FaFacebook size={30}/> </a>
                </li>
                <li>
                  <a href="." title="Twiter"><FaTwitter size={30}/></a>
                </li>
                <li>
                  <a href="" title="Google Plus"><FaGooglePlusSquare size={30}/></a>
                </li>
                <li>
                  <a href="" title="Youtube"><FaYoutube size={30}/></a>
                </li>
                <li>
                  <a href="" title="Instagram"><FaInstagram size={30}/></a>
                </li>
         </ul>
        </div>
      </div>
    </div>
    <div className="bot">
      <div className="container">
        <p className="copyright">
          Bản quyển thuộc về Gemachem. Cung cấp bởi ADC Việt Nam.
        </p>
      </div>
    </div>
  </footer>
  <div style={{ position: "absolute", top: 0 }} />
    </div>
  )
}

export default Footer