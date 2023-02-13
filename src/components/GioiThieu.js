import React from 'react'
import gioithieu from '../img/gioithieu/gt.jpg'
import hn1 from '../img/gioithieu/hn-1.jpg'
import hn2 from '../img/gioithieu/hn-2.jpg'

function GioiThieu() {
  return (
    <div>
      <title>Giới thiệu</title>
  <div id="about">
    <div className="container">
      <div id="map-link-bar">
        <ul>
          <li>
            <a href="/" title="Trang chủ">
              Trang chủ
            </a>
          </li>
          <li>Giới thiệu</li>
        </ul>
      </div>
      <div className="content_">
        <h1 className="h1-2b">Giới thiệu chung</h1>
        <div className="detail_">
          <br />
          <p style={{ textAlign: "center"}}>
            <b
              style={{
                textTransform: "uppercase",
                color: "#06833e",
                fontSize: 24
              }}
            >
              CÔNG TY CỔ PHẦN GEMACHEM VIỆT NAM
            </b>{" "}
            <br />
            <b style={{ textTransform: "uppercase", fontSize: 18 }}>
              GEMACHEM VIET NAM JOINT STOCK COMPANY
            </b>
          </p>
          <br />
          <ul>
            <li>
              Công ty cổ phần <b>GEMACHEM VIỆT NAM</b> là nhà nhập khẩu và phân
              phối, cung cấp hoá chất cho ngành mạ điện, phân bón, thuỷ tinh,
              gốm sứ, xử lý nước, kim loại màu, chất tẩy rửa công nghiệp trên
              thị trường toàn quốc.
              <br />
              <br />
            </li>
            <li>
              Chúng tôi luôn được các đối tác trong và ngoài nước đánh giá là
              nhà cung cấp uy tín, đối tác tin cậy, có chất lượng dịch vụ phục
              vụ chuyên nghiệp trong lĩnh vực phân phối hoá chất, các nguyên
              liệu, sản phẩm ngành hoá chất công nghiệp, nông nghiệp <br />
              <br />
            </li>
            <li>
              Sản phẩm của chúng tôi được nhập khẩu từ các công ty, tập đoàn nổi
              tiếng của các quốc gia như : Nga, Mỹ, Trung Quốc, Israel, Jordan,
              Hàn Quốc, Đức… <br />
              <br />
            </li>
            <li>
              Với phương châm :{" "}
              <b>“Phục vụ tốt nhất những gì khách hàng cần ”</b> . Chúng tôi
              cung cấp đáp ứng các yêu cầu khách hàng cần giá luôn rẻ nhất và
              tốt nhất trên thị trường, giao hàng đảm bảo trong thời gian sớm
              nhất, dịch vụ bán hàng chuyên nghiệp, hàng hoá đảm bảo chất lượng,
              xuất sứ rõ ràng <br />
              <br />
            </li>
          </ul>
          <p style={{ textAlign: "center" }}>
            <img src={gioithieu} alt="giới thiệu" />
          </p>
          <br />
          <p>Mọi thông tin chi tiết xin liên hệ :</p>
          <br />
          <p>
            <b
              style={{
                textTransform: "uppercase",
                fontSize: 18
              }}
            >
              Công ty cp gemachem việt nam
            </b>{" "}
            <br />
            <b>Trụ sở:</b> Số 203 Ngô Gia Tự, Phường Đức Giang, Quận Long Biên,
            Hà Nội, Việt Nam <br />
            <b>VPGD:</b> Số 46 Ngô Quyền, Phường Hàng Bài, Quận Hoàn Kiếm, Hà
            Nội, Việt Nam <br />
            <b>Điện thoại:</b> 008424392333254 - <b>Fax:</b> 00842439387667{" "}
            <br />
            <b>Phòng kinh doanh : Mr Tiến:</b> 0914896883 và <b>Mr Dương:</b>{" "}
            0965 506 165 <br />
            <b>Phòng xuất nhập khẩu: Ms Linh :</b> 0936237286 <br />
            <b>Phòng kế toán: Ms Hoài : </b>0984 099 860 <br />
            <b>Email:</b> contact@gemachem.com.vn <br />
            <b>Website:</b> www.gemachem.com.vn <br />
          </p>
        </div>
      </div>
      <div className="side-bar_">
        <div className="box">
          <h2 className="h2-sb">Giới thiệu</h2>
          <ul className="list-module">
            <li className="active">
              <h3 className="h3-md">
                <a href="/gioithieu" title="Giới thiệu chung">
                  Giới thiệu chung
                </a>
              </h3>
            </li>
            <li>
              <h3 className="h3-md">
                <a href="/gioithieu" title="Sơ đồ tổ chức">
                  Sơ đồ tổ chức
                </a>
              </h3>
            </li>
            <li>
              <h3 className="h3-md">
                <a href="/gioithieu" title="Lĩnh vực hoạt động">
                  Lĩnh vực hoạt động
                </a>
              </h3>
            </li>
            <li>
              <h3 className="h3-md">
                <a href="/gioithieu" title="Thế mạng của Gemachem">
                  Thế mạng của Gemachem
                </a>
              </h3>
            </li>
          </ul>
        </div>
        <div className="box">
          <h2 className="h2-sb">
            <a href="/gioithieu" title="Tin nổi bật">
              Tin nổi bật
            </a>
          </h2>
          <ul className="list-hot-news">
            <li>
              <a
                href="/gioithieu"
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
                  href="/gioithieu"
                  title="Ngân hàng Nhà nước sẵn sàng bán ngoại tệ can thiệp tỉ giá"
                >
                  Ngân hàng Nhà nước sẵn sàng bán ngoại tệ can thiệp tỉ giá
                </a>
              </h3>
            </li>
            <li>
              <a
                href="/gioithieu"
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
                  href="/gioithieu"
                  title="4 cảnh báo cho nhà đầu tư shophouse"
                >
                  4 cảnh báo cho nhà đầu tư shophouse
                </a>
              </h3>
            </li>
            <li>
              <a
                href="/gioithieu"
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
                  href="/gioithieu"
                  title="8 việc làm ở nhà vẫn nhận lương hàng chục nghìn USD"
                >
                  8 việc làm ở nhà vẫn nhận lương hàng chục nghìn USD
                </a>
              </h3>
            </li>
            <li>
              <a
                href="/gioithieu"
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
                  href="/gioithieu"
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
  <div style={{ position: "absolute", top: 0 }} />

    </div>
  )
}

export default GioiThieu