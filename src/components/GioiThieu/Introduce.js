import React from 'react';
import icon1 from "../../img/trangchu/reasons-1.png"
import icon2 from "../../img/trangchu/reasons-2.png"
import icon3 from "../../img/trangchu/reasons-3.png"
import icon4 from "../../img/trangchu/reasons-4.png"
import "./introduce.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Introduce() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col-md-4">
                    <h2 className="title">GIỚI THIỆU</h2>
                    <p>
                        CÔNG TY CP GEMACHEM VIỆT NAM thành lập năm 2007. Lĩnh vực kinh doanh chính là hóa chất công nghiệp và phân bón vô cơ. 100% hàng hóa nhập khẩu chính ngạch. Thị trường trải khắp cả nước. Khách hàng là các nhà máy, các khu công nghiệp, các nông trại, trang trại, các đại lý phân bón...
                    </p>
                    <button className="btn btn-outline-success btn-lg"><Link to={"/"}>Chi tiết &gt;</Link></button>
                </div>
                <div className="col-md-6" >
                    <h2 className="title">TẠI SAO CHỌN GEMACHEM</h2>
                    <div className="row row-cols-2 flex flex-nowrap" >
                        <div className="d-flex align-items-start mb-3 ">
                            <img src={icon1} alt="Icon" className="icon" />
                            <div>
                                <h5 className='title1'>HÓA CHẤT CHÍNH HÃNG</h5>
                                <p>100% hàng hóa nhập khẩu chính ngạch</p>
                            </div>
                        </div>
                        
                        <div className="d-flex align-items-start mb-3 ">
                            <img src={icon3} alt="Icon" className="icon" />
                            <div>
                                <h5 className='title1'>PHÂN PHỐI RỘNG KHẮP</h5>
                                <p>Thị trường trải khắp cả nước</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-2 flex flex-nowrap" >
                    <div className="d-flex align-items-start mb-3">
                            <img src={icon2} alt="Icon" className="icon" />
                            <div>
                                <h5 className='title1'>VẬN CHUYỂN LINH HOẠT</h5>
                                <p>Vận chuyển hàng hóa linh hoạt</p>
                            </div>
                        </div>
                        
                        <div className="d-flex align-items-start mb-3">
                            <img src={icon4} alt="Icon" className="icon" />
                            <div>
                                <h5 className='title1'>KHÁCH HÀNG</h5>
                                <p>Khách hàng đối tác tin cậy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;