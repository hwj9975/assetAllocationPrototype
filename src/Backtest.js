import "./Backtest.css";
import React, { useState } from "react";

function Backtest() {
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 동작 취소

    const sum = Number(a) + Number(b);
    if (sum === 100) {
      // form 제출 로직 처리
      event.target.submit();
    } else {
      alert("주식 현금 비율이 합 100이 되어야 합니다!");
    }
  };

  const [money, moneyset] = useState(0);
  const [stock, stockset] = useState(0);
  const [a, aset] = useState();
  const [b, bset] = useState();

  return (
    <div className="Backtest">
      <form action="input.php" onSubmit={handleSubmit}>
        <h1>BackTest 사전 준비</h1>
        <p>
          현금을 입력해주세요{" "}
          <input
            type="number"
            min={0}
            placeholder="현금을 입력하세요"
            value={money}
            onChange={(e) => {
              moneyset(e.target.value);
            }}
          ></input>
        </p>
        <p>
          주식을 입력해주세요{" "}
          <input
            type="number"
            id="stock"
            min={0}
            placeholder="주식을 입력하세요"
            value={stock}
            onChange={(e) => {
              stockset(e.target.value);
            }}
          ></input>
        </p>
        <p>
          현금 비율을 입력해주세요{" "}
          <input
            type="number"
            id="moneyper"
            min={0}
            placeholder="현금 비율을 입력하세요"
            value={a}
            onChange={(e) => {
              aset(e.target.value);
            }}
          ></input>
        </p>
        <p>
          주식 비율을 입력해주세요{" "}
          <input
            type="number"
            id="stockper"
            min={0}
            placeholder="주식 비율을 입력하세요"
            value={b}
            onChange={(e) => {
              bset(e.target.value);
            }}
          ></input>
          <div className="dateinout">
            <div className="startdate">
              시작 시점
              <input id="startdate" type="month" value="2023-05"></input>
            </div>
            <div className="enddate">
              종결 시점
              <input type="month" id="enddate" value="2023-05"></input>
            </div>
          </div>
        </p>
        <div>
          {Number(a) + Number(b) === 100 ? (
            <div></div>
          ) : (
            <div className="not100">
              주식과 현금 비율의 합이 100 이 되도록 입력해주세요
            </div>
          )}
        </div>
        <p>
          {/*input 이 됬을경우 그 이후 조작이 프론트 쪽에서 불가능한거 같음 */}
          {/* <Link to="./Result">  */}
          <button type="submit" onSubmit={() => {}}>
            벡테스트 돌리기
          </button>
          {/* </Link> */}
        </p>
      </form>
    </div>
  );

  // return (
  //   <form onAction="Input.php">
  //     <div className="input">
  //       <h1>가지고 계신 현금을 입력해주세요 :</h1>
  //       <input type="Number" id="Money" placeholder="현금값을 입력해주세요" />
  //     </div>
  //     <div className="input">
  //       <h1>가지고 계신 채권을 입력해주세요 :</h1>
  //       <input type="Number" id="Cash" placeholder="채권값을 입력해주세요" />
  //     </div>
  //     <div className="input">
  //       <h1>주식비율을 입력해주세요 :</h1>
  //       <input
  //         type="Number"
  //         name="주식비율"
  //         placeholder="주식 비율을 입력해주세요"
  //       />
  //       <h2>원</h2>
  //     </div>
  //     <div className="input">
  //       <h1>채권비율을 입력해주세요 :</h1>
  //       <input
  //         type="Number"
  //         name="채권비율"
  //         placeholder="채권 비율을 입력해주세요"
  //       />
  //     </div>

  //     <button type="submit" onclick="alert('Submit')">
  //       벡테스트 돌리기
  //     </button>
  //   </form>
  // );
}

export default Backtest;
