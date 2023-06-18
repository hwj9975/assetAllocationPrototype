import "./Header.css";
import Logo from "./image/Logo.jpg";
import Logo1 from "./image/Logo1.jpg";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img src={Logo} className="header_logo" alt="headerlogo" />
        </Link>
        {/* <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div> */}

        <div className="header_nav">
          <Link to="/Backtest">
            <div className="header_option">
              <span className="header_optionLineOne">백테스트</span>
            </div>
          </Link>
          <Link to="/Strategy">
            <div className="header_option">
              <span className="header_optionLineOne">전략 설명</span>
            </div>
          </Link>
          <Link to="/Contact">
            <div className="header_option">
              <span className="header_optionLineOne">연락처</span>
            </div>
          </Link>
          <Link to="/NotReady">
            <div className="header_option">
              <span className="header_optionLineOne">준비 예정</span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header_optionLineTwo">로그인</span>
          </div>
        </div>
      </div>
      <div id="slides">
        <img src={Logo1} alt="" width={"100%"} height={"200px"} />
      </div>
    </div>
  );
}

export default Header;
