/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import hn1 from '../img/gioithieu/hn-1.jpg'
import hn2 from '../img/gioithieu/hn-2.jpg'
import ns1 from '../img/tintuc/ns-1.jpg'
import ns2 from '../img/tintuc/ns-2.jpg'
import ns3 from '../img/tintuc/ns-3.jpg'
import ns4 from '../img/tintuc/ns-4.jpg'
import ns5 from '../img/tintuc/ns-5.jpg'
import { useNavigate } from 'react-router'

function TinTuc() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/tintuc");
  return (
    <div>
      <title>Tin tức</title>
      <div id="news">
  <div className="container">
    <div id="map-link-bar">
      <ul>
        <li>
          <a href="/" title="Trang chủ">
            Trang chủ
          </a>
        </li>
        <li>
          <a href="/tintuc" title="Tin tức">
            Tin tức
          </a>
        </li>
        <li>Tin công ty</li>
      </ul>
    </div>
    <div className="content_">
      <h1 className="h1-2b">Tin công ty</h1>
      <ul className="list-news_">
        <li>
          <a
            onClick={handleClick}
            title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            className="avt"
          >
            <img
              src={ns1}
              alt="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            />
          </a>
          <div className="desc">
            <h3>
              <a
                onClick={handleClick}
                title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
              >
                EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64
              </a>
            </h3>
            <span className="date">28/6/2019</span>
            <p>
              Chủ tịch EVN cho biết sẽ dựa trên số liệu lượng điện tiêu thụ và
              kinh nghiệm của thế giới để đề xuất phương án biểu giá điện mới.
            </p>
            <a className="btn-a4" onClick={handleClick}>
              Chi tiết
            </a>
          </div>
        </li>
        <li>
          <a
            href="/tintuc"
            title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            className="avt"
          >
            <img
              src={ns2}
              alt="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            />
          </a>
          <div className="desc">
            <h3>
              <a
                href="/tintuc"
                title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
              >
                EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64
              </a>
            </h3>
            <span className="date">28/6/2019</span>
            <p>
              Chủ tịch EVN cho biết sẽ dựa trên số liệu lượng điện tiêu thụ và
              kinh nghiệm của thế giới để đề xuất phương án biểu giá điện mới.
            </p>
            <a href="/tintuc" className="btn-a4" onClick={handleClick}>
              Chi tiết
            </a>
          </div>
        </li>
        <li>
          <a
            href="/tintuc"
            title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            className="avt"
          >
            <img
              src={ns3}
              alt="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            />
          </a>
          <div className="desc">
            <h3>
              <a
                href="/tintuc"
                title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
              >
                EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64
              </a>
            </h3>
            <span className="date">28/6/2019</span>
            <p>
              Chủ tịch EVN cho biết sẽ dựa trên số liệu lượng điện tiêu thụ và
              kinh nghiệm của thế giới để đề xuất phương án biểu giá điện mới.
            </p>
            <a href="/tintuc" className="btn-a4" onClick={handleClick}>
              Chi tiết
            </a>
          </div>
        </li>
        <li>
          <a
            href="/tintuc"
            title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            className="avt"
          >
            <img
              src={ns4}
              alt="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            />
          </a>
          <div className="desc">
            <h3>
              <a
                href="/tintuc"
                title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
              >
                EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64
              </a>
            </h3>
            <span className="date">28/6/2019</span>
            <p>
              Chủ tịch EVN cho biết sẽ dựa trên số liệu lượng điện tiêu thụ và
              kinh nghiệm của thế giới để đề xuất phương án biểu giá điện mới.
            </p>
            <a href="/tintuc" className="btn-a4" onClick={handleClick}>
              Chi tiết
            </a>
          </div>
        </li>
        <li>
          <a
            href="/tintuc"
            title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            className="avt"
          >
            <img
              src={ns5}
              alt="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
            />
          </a>
          <div className="desc">
            <h3>
              <a
                href="/tintuc"
                title="EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64"
              >
                EVN sẽ đề xuất phương án điều chỉnh biểu giá điện sinh hoạt 64
              </a>
            </h3>
            <span className="date">28/6/2019</span>
            <p>
              Chủ tịch EVN cho biết sẽ dựa trên số liệu lượng điện tiêu thụ và
              kinh nghiệm của thế giới để đề xuất phương án biểu giá điện mới.
            </p>
            <a href="/tintuc" className="btn-a4" onClick={handleClick}>
              Chi tiết
            </a>
          </div>
        </li>
      </ul>
      <div className="pagination">
        <ul>
          <li>
            <a href="/tintuc" onClick={handleClick}>1</a>
          </li>
          <li>
            <a href="/tintuc" onClick={handleClick}>2</a>
          </li>
          <li>
            <a href="/tintuc" onClick={handleClick}>3</a>
          </li>
          <li>
            <a href="/tintuc" onClick={handleClick}>
              <i className="fa fa-angle-right" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="/tintuc" onClick={handleClick}>
              <i className="fa fa-angle-double-right" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="side-bar_">
      <div className="box">
        <h2 className="h2-sb">Dịch vụ</h2>
        <ul className="list-module">
          <li className="active">
            <h3 className="h3-md">
              <a href="/tintuc" title="Tin công ty">
                Tin công ty
              </a>
            </h3>
          </li>
          <li>
            <h3 className="h3-md">
              <a href="/tintuc" title="Tin chuyên ngành">
                Tin chuyên ngành
              </a>
            </h3>
          </li>
          <li>
            <h3 className="h3-md">
              <a href="/tintuc" title="Tin tức khác">
                Tin tức khác
              </a>
            </h3>
          </li>
        </ul>
      </div>
      <div className="box">
        <h2 className="h2-sb">
          <a href="/tintuc" title="Tin nổi bật">
            Tin nổi bật
          </a>
        </h2>
        <ul className="list-hot-news">
          <li>
            <a
              href="/tintuc"
              title="Ngân hàng Nhà nước sẵn sàng bán ngoại tệ can thiệp tỉ giá"
              className="avt"
            >
              <img
                src={hn1}
                alt="Ngân hàng Nhà nước sẵn sàng bán ngoại tệ can thiệp tỉ giá"
              />
            </a>
            <h3 className="h3-hn">
              <a
                href="/tintuc"
                title="Ngân hàng Nhà nước sẵn sàng bán ngoại tệ can thiệp tỉ giá"
              >
                Ngân hàng Nhà nước sẵn sàng bán ngoại tệ can thiệp tỉ giá
              </a>
            </h3>
          </li>
          <li>
            <a
              href="/tintuc"
              title="4 cảnh báo cho nhà đầu tư shophouse"
              className="avt"
            >
              <img
                src={hn2}
                alt="4 cảnh báo cho nhà đầu tư shophouse"
              />
            </a>
            <h3 className="h3-hn">
              <a
                href="/tintuc"
                title="4 cảnh báo cho nhà đầu tư shophouse"
              >
                4 cảnh báo cho nhà đầu tư shophouse
              </a>
            </h3>
          </li>
          <li>
            <a
              href="/tintuc"
              title="8 việc làm ở nhà vẫn nhận lương hàng chục nghìn USD"
              className="avt"
            >
              <img
                src={hn1}
                alt="8 việc làm ở nhà vẫn nhận lương hàng chục nghìn USD"
              />
            </a>
            <h3 className="h3-hn">
              <a
                href="/tintuc"
                title="8 việc làm ở nhà vẫn nhận lương hàng chục nghìn USD"
              >
                8 việc làm ở nhà vẫn nhận lương hàng chục nghìn USD
              </a>
            </h3>
          </li>
          <li>
            <a
              href="/tintuc"
              title="Mô hình second home nhiều lợi thế thu hút đầu tư"
              className="avt"
            >
              <img
                src={hn2}
                alt="Mô hình second home nhiều lợi thế thu hút đầu tư"
              />
            </a>
            <h3 className="h3-hn">
              <a
                href="/tintuc"
                title="Mô hình second home nhiều lợi thế thu hút đầu tư"
              >
                Mô hình second home nhiều lợi thế thu hút đầu tư
              </a>
            </h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default TinTuc