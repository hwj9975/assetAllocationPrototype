import "./Strategy.css";

const Strategy = () => {
  return (
    <div className="strategy">
      <div id="explan">
        <a href="https://quantist.co.kr/vaa_pages#:~:text=%EA%B0%81%20%EC%9E%90%EC%82%B0%EC%9D%98%20%EB%AA%A8%EB%A9%98%ED%85%80%20%EC%8A%A4%EC%BD%94%EC%96%B4,%EB%A7%A4%EC%88%98%EB%A5%BC%20%EC%A7%84%ED%96%89%ED%95%98%EA%B2%8C%20%EB%90%A9%EB%8B%88%EB%8B%A4.&text=1%EA%B0%9C%EC%9B%94%20%EB%8B%A8%EC%9C%84%EB%A1%9C%20%EB%AA%A8%EB%A9%98%ED%85%80,%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%EB%A5%BC%20%EB%A6%AC%EB%B2%A8%EB%9F%B0%EC%8B%B1%20%ED%95%A9%EB%8B%88%EB%8B%A4.">
          <h1>VAA전략(Vigilant Asset Allocation)</h1>
        </a>
        <h2>전략 요약</h2>
        <h4>
          VAA(Vigilant Asset Allocation)는 2017년 Wouter J. Keller가 제안한
          동적자산 배분전략 중 하나입니다. PAA(Protective Asset Allocation)의
          후속 전략으로, 연 평균 수익률 10% 이상 및 drawdowns(낙폭) 20%
          미만(긍정적으로 15% 미만)을 목표로 합니다. VAA는 4개의 공격자산(미국
          주식 SPY, 선진국 주식 VEA, 이머징마켓 주식 VWO, 미국 종합채권 BND)과
          3개의 방어자산(미국 회사채 LQD, 미국 중기국채 IEF, 미국 단기국채
          SHY)으로 구성되어 있습니다. 각 자산의 모멘텀 스코어를 계산하여
          공격자산 중 월말 현재 모멘텀 스코어가 가장 높은 자산을 1종목을
          선택하여 매수를 진행하게 됩니다. VAA모멘텀 스코어 : 1개월 모멘텀 x 12
          + 3개월 모멘텀 x 4 + 6개월 모멘텀 x 2 + 12개월 모멘텀 x 1 1개월 단위로
          모멘텀 스코어를 재계산하여 모멘텀 스코어가 높은 종목으로 전체
          포트폴리오를 리벨런싱 합니다. 다만, 4개의 공격자산 중 1개의 자산이라도
          모멘텀 스코어가 음수(마이너스)가 나오게 된다면, 공격형 자산 대신
          수비형 자산으로 포트폴리오를 교체하게되며, 이 때에도 모멘텀 스코어가
          가장 높은 수비형 자산 1종목을 매수하게 됩니다.
        </h4>
      </div>
      <div id="explan">
        <a href="https://quantist.co.kr/daa_pages#:~:text=DAA(Defensive%20Asset%20Allocation)%EB%8A%94,%EC%9D%98%20%EB%B9%84%EC%A4%91%EC%9D%84%20%EA%B2%B0%EC%A0%95%ED%95%A9%EB%8B%88%EB%8B%A4.">
          <h1>DAA전략(Defensive Asset Allocation)</h1>
        </a>
        <h2>전략 요약</h2>
        <h4>
          DAA(Defensive Asset Allocation)는 2018년 Wouter J. Keller가 제안한
          동적자산 배분전략 중 하나입니다. VAA(Vigilant Asset Allocation)의 변형
          전략으로, 카나리아 자산을 이용하여 공격자산과 방어자산의 비중을
          결정합니다. VAA에 비해 공격자산의 보유기간을 늘림으로써 시장
          상승추세에 대한 추적오차를 줄이고, 수익성이 낮아진 채권 보유기간이
          줄어들어 수익률과 위험 측면에서 VAA대비 개선을 이룬 것으로 평가됩니다.
          DAA는 12개의 공격자산, 3개의 방어자산 그리고 2개의 카나리아
          자산(canary assets)으로 구성되어 있습니다. 공격자산: SPY(S&P500 주식),
          QQQ(나스닥 주식), IWM(RUSSELL2000 주식), VGK(유럽 주식), EWJ(일본
          주식), VWO(이머징마켓 주식), VNQ(부동산), DBC(원자재), GLD(금),
          TLT(미국 장기국채), HYG(하이일드채권), LQD(미국 회사채) 방어자산:
          SHY(미국 단기국채), IEF(미국 중기국채), LQD(미국 회사채) 카나리아
          자산: VWO(이머징마켓 주식), BND(미국 종합채권) 카나리아 자산의
          모멘텀을 계산하여 공격자산과 방어자산의 비중을 계산합니다. 카나리아
          자산이 모두 양의 모멘텀(VWO 및 BND 모멘텀이 양수)을 가진다면,
          공격자산(6종목, 각각 16.7%)으로만 포트폴리오를 구성하며, 카나리아
          자산이 모두 음의 모멘텀을 가진다면, 방어자산(1종목, 100%)으로만
          포트폴리오를 구성하게 됩니다. 카나리아 자산 중 하나의 모멘텀이 양이고,
          다른 하나가 음의 모멘텀(VWO 또는 BND 모멘텀이 음수)이라면, 공격자산
          절반(3종목, 각각 16.7%)과 방어자산 절반(1종목, 50%)으로 포트폴리오를
          구성합니다. 공격자산 또는 방어자산 중 모멘텀 스코어가 높은 종목 순으로
          매수 종목을 선정합니다. DAA모멘텀 스코어: 1개월 모멘텀 x 12 + 3개월
          모멘텀 x 4 + 6개월 모멘텀 x 2 + 12개월 모멘텀 x 1 1개월 단위로
          카나리아 자산과 각 자산의 모멘텀 스코어를 재계산하여 전체 포트폴리오를
          리벨런싱 합니다.
        </h4>
      </div>
      <div id="explan">
        <a href="https://quantist.co.kr/paa_pages">
          <h1>PAA전략(Protective Asset Allocation)</h1>
        </a>
        <h2>전략 요약</h2>
        <h4>
          PAA(Protective Asset Allocation)는 2016년 Wouter J. Keller가 제안한
          동적자산 배분전략 중 하나입니다. PAA는 논문 제목을 "정기예금을 대체할
          만한 간단한 모멘텀 전략(A Simple Momentum-Based Alternative for Term
          Deposits)" 으로 지었을 정도로 굉장히 보수적인 전략입니다. PAA는
          "충돌방지" 자산("crash protection" asset) 개념을 도입하여 연평균
          수익률(성과) 대비 비교적 낮은 손실(drawdowns)을 보여주고 있습니다.
          PAA는 총 12개의 자산과 1개의 현금성자산으로 구성됩니다. 12개의 자산은
          SPY(S&P500), QQQ(나스닥), IWM(러셀2000), VGK(유럽), EWJ(일본),
          EEM(이머징마켓), VNQ(부동산), DBC(원자재), GLD(금), HYG(하이일드채권),
          LQD(미국 회사채), TLT(미국 장기국채)를 이용하며 현금성 자산으로 미국
          중기국채(IEF)를 이용합니다. 전략의 구성법은 다음과 같습니다. 매월
          마지막 거래일에 12개 자산 각각의 모멘텀 점수를 계산합니다. 모멘텀은
          12개월의 단순 이동평균(SMA)을 이용합니다. 모멘텀 스코어: (월말 종가 /
          12개월 단순 이동평균) - 1 12개의 자산 중 모멘텀 스코어가 높은 상위
          6개의 자산을 매수(각각의 비중 16.7%)합니다. 다만, 모멘텀이 마이너스인
          자산이 있을 경우(12개월 단순 이동평균보다 월말 종가가 낮은 경우),
          마이너스 모멘텀인 자산 1개당 현금 비중을 16.7%씩 늘려줍니다. 다음 표는
          모멘텀이 마이너스인 자산(#Bad) 개수 당 현금 비율(붉은색 네모 안)을
          나타내 줍니다.
        </h4>
      </div>
    </div>
  );
};

export default Strategy;
