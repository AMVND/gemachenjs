/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import avt1 from '../img/trangchu/reasons-1.png'
import avt2 from '../img/trangchu/reasons-2.png'
import avt3 from '../img/trangchu/reasons-3.png'
import avt4 from '../img/trangchu/reasons-4.png'
import PC from '../img/trangchu/hc-1.png'
import PN from '../img/trangchu/hc-2.png'
import SN from '../img/trangchu/hc-3.png'
import AB from '../img/trangchu/hc-4.png'
import vtnd from '../img/trangchu/sevice-1.png'
import vtnd1 from '../img/trangchu/sevice-1.jpg'
import utxnk from '../img/trangchu/sevice-2.png'
import utxnk1 from '../img/trangchu/sevice-2.jpg'
import tvxkld from '../img/trangchu/sevice-3.png'
import tvxkld1 from '../img/trangchu/sevice-3.jpg'
import news from '../img/trangchu/news-1.jpg'
import news1 from '../img/trangchu/news-2.jpg'
import news2 from '../img/trangchu/news-3.jpg'
import news3 from '../img/trangchu/news-4.jpg'
import news4 from '../img/trangchu/news-5.jpg'
import td from '../img/trangchu/rec-1.jpg'
import { useNavigate} from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  const handleUT = () => navigate("/lienhe");
  return (
    <div>
      <title>GEMACHEM JSC</title>
    <div className="f1">
    <div className="container">
      <div className="id_about">
        <h2 className="h2-smb">Về chúng tôi</h2>
        <p>
          CÔNG TY CP GEMACHEM VIỆT NAM thành lập năm 2017. Lĩnh vực kinh doanh
          chính là hóa chất công nghiệp và phân bón vô cơ. 100% hàng hóa nhập
          khẩu chính ngạch. Thị trường trải khắp cả nước. Khách hàng là các nhà
          máy, các khu công nghiệp, các nông trại, trang trại, các đại lý phân
          bón...
        </p>
        <a href="#" className="btn-a">
          Chi tiết
        </a>
      </div>
      <div className="id_choose">
        <h2 className="h2-smb">Tại sao chọn GEMACHEM</h2>
        <ul className="reasons">
          <li>
            <div className="avt">
              <img src={avt1} alt="Hóa chất chính hãng" />
            </div>
            <div className="desc">
              <p>Hóa chất chính hãng</p>
              <span>100% hàng hóa nhập khẩu chính nghạch</span>
            </div>
          </li>
          <li>
            <div className="avt">
              <img src={avt2} alt="Phân phối rộng khắp" />
            </div>
            <div className="desc">
              <p>Phân phối rộng khắp</p>
              <span>Thị trường trải khắp cả nước</span>
            </div>
          </li>
          <li>
            <div className="avt">
              <img src={avt3} alt="Vận chuyển linh hoạt" />
            </div>
            <div className="desc">
              <p>Vận chuyển linh hoạt</p>
              <span>Vận chuyển hàng hóa linh hoạt</span>
            </div>
          </li>
          <li>
            <div className="avt">
              <img src={avt4} alt="Khách hàng" />
            </div>
            <div className="desc">
              <p>Khách hàng</p>
              <span>Khách hàng đối tác tin cậy</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    className="f2"
    style={{
      background: "url(img/bg-sp-id.jpg) center no-repeat",
      backgroundSize: "cover"
    }}
  >
    <div className="container">
      <h2 className="h2-smb b-center">
        <a href="#" title="Sản phẩm">
          Sản phẩm
        </a>
      </h2>
      <div className="tab-slide">
        <ul>
          <li className="active">
            <h3>
              <a data-toggle="tab" href="##tab-slide-1">
                Hóa chất
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a data-toggle="tab" href="##tab-slide-2">
                Phân bón
              </a>
            </h3>
          </li>
        </ul>
        <div className="tab-content">
          <div id="tab-slide-1" className="tab-pane fade in active">
            <div className="slide-p">
              <div className="lSSlideOuter ">
                <div
                  className="lSSlideWrapper usingCss"
                  style={{
                    transitionDuration: "600ms",
                    transitionTimingFunction: "ease"
                  }}
                >
                  <ul
                    className="lightSlider lsGrab lSSlide"
                    style={{
                      width: "3867.5px",
                      transform: "translate3d(-1190px, 0px, 0px)",
                      height: 304,
                      paddingBottom: "0%"
                    }}
                  >
                    <li
                      className="clone left"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Nitrate">
                          <img
                            src={PN}
                            alt="Potassium Nitrate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone left"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone left"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Acid Boric">
                          <img src={AB} alt="Acid Boric" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Acid Boric</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone left"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide active"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Chlorate">
                          <img
                            src={PC}
                            alt="Potassium Chlorate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Chlorate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Nitrate">
                          <img
                            src={PN}
                            alt="Potassium Nitrate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Acid Boric">
                          <img src={AB} alt="Acid Boric" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Acid Boric</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone right"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Chlorate">
                          <img
                            src={PC}
                            alt="Potassium Chlorate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Chlorate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone right"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Nitrate">
                          <img
                            src={PN}
                            alt="Potassium Nitrate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone right"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone right"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Acid Boric">
                          <img src={AB} alt="Acid Boric" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Acid Boric</a>
                        </h4>
                      </div>
                    </li>
                  </ul>
                  <div className="lSAction">
                    <a className="lSPrev" />
                    <a className="lSNext" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-slide-2" className="tab-pane fade">
            <div className="slide-p">
              <div className="lSSlideOuter ">
                <div
                  className="lSSlideWrapper usingCss"
                  style={{ transitionDuration: "600ms" }}
                >
                  <ul
                    className="lightSlider lsGrab lSSlide"
                    style={{
                      width: "3867.5px",
                      transform: "translate3d(-1190px, 0px, 0px)",
                      height: 304,
                      paddingBottom: "0%"
                    }}
                  >
                    <li
                      className="clone left"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Acid Boric">
                          <img src={AB} alt="Acid Boric" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Acid Boric</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone left"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone left"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Chlorate">
                          <img
                            src={PC}
                            alt="Potassium Chlorate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Chlorate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone left"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Nitrate">
                          <img
                            src={PN}
                            alt="Potassium Nitrate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide active"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Acid Boric">
                          <img src={AB} alt="Acid Boric" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Acid Boric</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Chlorate">
                          <img
                            src={PC}
                            alt="Potassium Chlorate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Chlorate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="lslide"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Nitrate">
                          <img
                            src={PN}
                            alt="Potassium Nitrate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone right"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone right"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Acid Boric">
                          <img src={AB} alt="Acid Boric" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Acid Boric</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone right"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Sodium Nitrate">
                          <img src={SN} alt="Sodium Nitrate" />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Sodium Nitrate</a>
                        </h4>
                      </div>
                    </li>
                    <li
                      className="clone right"
                      style={{ width: "287.5px", marginRight: 10 }}
                    >
                      <div className="item">
                        <a href="#" className="avt" title="Potassium Chlorate">
                          <img
                            src={PC}
                            alt="Potassium Chlorate"
                          />
                        </a>
                        <h4 className="h4-p">
                          <a href="#">Potassium Chlorate</a>
                        </h4>
                      </div>
                    </li>
                  </ul>
                  <div className="lSAction">
                    <a className="lSPrev" />
                    <a className="lSNext" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="f3">
    <div className="container">
      <h2 className="h2-smb b-center">
        <a href="#" title="Dịch vụ">
          Dịch vụ
        </a>
      </h2>
      <ul className="id_sevice">
        <li>
          <div className="avt">
            <img src={vtnd1} alt="Vận tải nội địa" />
          </div>
          <div className="box">
            <a href="#" title="Vận tải nội địa" className="icon">
              <img src={vtnd} alt="Vận tải nội địa" />
            </a>
            <span>Dịch vụ</span>
            <h3 className="h3-w">
              <a href="#" title="">
                Vận tải nội địa
              </a>
            </h3>
            <a href="#" className="btn-a2">
              Chi tiết
            </a>
          </div>
        </li>
        <li>
          <div className="avt">
            <img src={utxnk1} alt="Uỷ thác xuất nhập khẩu" />
          </div>
          <div className="box">
            <a href="#" title="Uỷ thác xuất nhập khẩu" className="icon">
              <img src={utxnk} alt="Uỷ thác xuất nhập khẩu" />
            </a>
            <span>Dịch vụ</span>
            <h3 className="h3-w">
              <a href="#" title="">
                Uỷ thác xuất nhập khẩu
              </a>
            </h3>
            <a href="#" className="btn-a2">
              Chi tiết
            </a>
          </div>
        </li>
        <li>
          <div className="avt">
            <img
              src={tvxkld1}
              alt="Tư vấn xuất khẩu lao động"
            />
          </div>
          <div className="box">
            <a href="#" title="Tư vấn xuất khẩu lao động" className="icon">
              <img
                src={tvxkld}
                alt="Tư vấn xuất khẩu lao động"
              />
            </a>
            <span>Dịch vụ</span>
            <h3 className="h3-w">
              <a href="#" title="">
                Tư vấn xuất khẩu lao động
              </a>
            </h3>
            <a href="#" className="btn-a2">
              Chi tiết
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="f4">
    <div className="container">
      <div className="id_news">
        <h2 className="h2-smb">
          <a href="#" title="Tin tức">
            Tin tức
          </a>
        </h2>
        <ul>
          <li>
            <a
              href="#"
              className="avt"
              title="Thủ tục nhập khẩu hóa chất 2018 mới"
            >
              <img
                src={news}
                alt="Thủ tục nhập khẩu hóa chất 2018 mới"
              />
            </a>
            <h3 className="h3-b">
              <a href="#" title="Thủ tục nhập khẩu hóa chất 2018 mới">
                Thủ tục nhập khẩu hóa chất 2018 mới
              </a>
            </h3>
            <span className="date">12/05/2019</span>
            <p>
              Do hoá chất là hàng hoá dặc thù cần có thông tin chi tiết để xác
              định bản chất và áp dụng chính sách hàng hoá. Đề nghị công ty căn
              cứ tên hóa chất theo tiếng Anh, Mã số HS, Mã số{" "}
            </p>
          </li>
          <li>
            <a
              href="#"
              className="avt"
              title="Sẽ xóa bỏ hơn 91% dòng thuế nhập khẩu từ Cuba"
            >
              <img
                src={news1}
                alt="Sẽ xóa bỏ hơn 91% dòng thuế nhập khẩu từ Cuba"
              />
            </a>
            <h3 className="h3-b">
              <a href="#" title="Sẽ xóa bỏ hơn 91% dòng thuế nhập khẩu từ Cuba">
                Sẽ xóa bỏ hơn 91% dòng thuế nhập khẩu từ Cuba
              </a>
            </h3>
            <span className="date">12/05/2019</span>
          </li>
          <li>
            <a
              href="#"
              className="avt"
              title="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
            >
              <img
                src={news2}
                alt="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
              />
            </a>
            <h3 className="h3-b">
              <a
                href="#"
                title="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
              >
                Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019
              </a>
            </h3>
            <span className="date">12/05/2019</span>
          </li>
          <li>
            <a
              href="#"
              className="avt"
              title="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
            >
              <img
                src={news3}
                alt="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
              />
            </a>
            <h3 className="h3-b">
              <a
                href="#"
                title="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
              >
                Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019
              </a>
            </h3>
            <span className="date">12/05/2019</span>
          </li>
          <li>
            <a
              href="#"
              className="avt"
              title="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
            >
              <img
                src={news4}
                alt="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
              />
            </a>
            <h3 className="h3-b">
              <a
                href="#"
                title="Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019"
              >
                Cả nước xuất siêu hơn 710 triệu USD trong 4 tháng đầu năm 2019
              </a>
            </h3>
            <span className="date">12/05/2019</span>
          </li>
        </ul>
      </div>
      <div className="id_recruitment">
        <h2 className="h2-smb">
          <a href="#" title="Tuyển dụng">
            Tuyển dụng
          </a>
        </h2>
        <div className="box">
          <a href="#" className="avt" title="Tuyển dụng">
            <img src={td} alt="Tuyển dụng" />
          </a>
          <div className="desc">
            <h3 className="h3-c">
              <a href="#" title="Nhân Viên Kinh Doanh Hóa Chất">
                Nhân Viên Kinh Doanh Hóa Chất
              </a>
            </h3>
            <ul>
              <li>Số lượng: 8 người</li>
              <li>Ngày hết hạn: 28/05/2019</li>
            </ul>
            <a href="#" className="btn-a3" title="Ứng tuyển" onClick={handleUT}>
              Ứng tuyển
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Home