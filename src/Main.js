import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <div id="contents">
        <div id="tabMenu">
          <input type="radio" id="tab1" name="tabs" checked />
          <label for="tab1">한국 주식</label>
          <input type="radio" id="tab2" name="tabs" />
          <label for="tab2">미국 주식</label>
          <div id="notice" class="tabContent">
            <h2>한국 주식 순위 입니다.</h2>
            <ul>
              <a href="https://www.google.com/finance/quote/005930:KRX?sa=X&ved=2ahUKEwiXt-v85eX-AhUrHzQIHSuwDY0Q3ecFegQIKxAh">
                <li>삼성전자</li>
              </a>
              <a href="https://www.google.com/finance/quote/373220:KRX">
                <li>LG에너지솔루션</li>
              </a>
              <a href="https://www.google.com/finance/quote/000660:KRX">
                <li>SK하이닉스</li>
              </a>
              <a href="https://www.google.com/finance/quote/207940:KRX">
                <li>삼성바이오로직스</li>
              </a>
              <a href="https://www.google.com/finance/quote/051910:KRX">
                <li>LG화학</li>
              </a>
            </ul>
          </div>
          <div id="notice1" class="tabContent">
            <h2>미국 주식 순위 입니다.</h2>
            <ul>
              <a href="https://www.google.com/finance/quote/AAPL:NASDAQ">
                <li>애플</li>
              </a>
              <li>아마존</li>
              <li>마이크로소프트</li>
              <li>텐센트</li>
              <li>페이스북</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="personelaccount">
        <h1>개인 계좌 내역 표시 구간 입니다</h1>
      </div>
    </div>
  );
};

export default Main;
