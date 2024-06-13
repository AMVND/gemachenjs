/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

function LienHe() {
  return (
    <div>
      <div id="contact">
  <div className="container">
    <div id="map-link-bar">
      <ul>
        <li>
          <a href="/" title="Trang chủ">
            Trang chủ
          </a>
        </li>
        <li>Liên hệ</li>
      </ul>
    </div>
    <h1 className="h1-2b">Liên hệ</h1>
    <div className="contact_info">
      <div className="box">
        <p className="name-company">Công ty cp gemachem việt nam</p>
        <p>
          <b>Trụ sở:</b> Số 203 Ngô Gia Tự, Phường Đức Giang, Quận Long Biên, Hà
          Nội, Việt Nam
        </p>
        <p>
          <b>VPGD:</b> Số 46 Ngô Quyền, Phường Hàng Bài, Quận Hoàn Kiếm, Hà Nội,
          Việt Nam
        </p>
        <p>
          <b>Điện thoại:</b> 008424392333254 - <b>Fax:</b> 00842439387667
        </p>
        <p>
          <b>Email:</b> <a href="./lienhe.html">contact@gemachem.com.vn</a> -{" "}
          <b>Website:</b> <a href="./lienhe.html">www.gemachem.com.vn</a>
        </p>
      </div>
      <div className="logo-contact">
        <img src="./lienhe/lg-lh.png" alt="" />
      </div>
    </div>
    <div className="map">
      <h2 className="h2-ct">Bản đồ</h2>
      <div className="box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.319037048589!2d105.88983151442692!3d21.059916192090938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a99a40390f03%3A0x1363a198fcfb4eb6!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gR2VtYWNoZW0gVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1654861196905!5m2!1svi!2s"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    <div className="form-contact">
      <h2 className="h2-ct">Gửi liên hệ cho chúng tôi</h2>
      <div className="box">
        <form action="./lienhe.html">
          <input type="text" placeholder="Họ và tên" />
          <input type="text" placeholder="Tên công ty" />
          <input type="text" placeholder="Địa chỉ" />
          <input type="text" placeholder="Điện thoại" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Tiêu đề" />
          <textarea placeholder="Nội dung" defaultValue={""} />
          <button>Gửi đi</button>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default LienHe