import React from 'react';
import { useMediaQuery } from 'react-responsive';

const BenefitCardB = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1200px)'
  });

  return (
    <div id="card-B" className="card" style={{ background: '#f1e7ff' }}>
      <div className="card-header" style={{ color: '#A965FF' }}>
        {isMobile ? (
          <p className="card-title">#매출액 2억 #종업원 3명 (신규채용 2명)</p>
        ) : (
          <>
            <p className="card-title">법인 사업자</p>
            <ul>
              <li>매출액 2억</li>
              <li>종업원 3명 (신규채용 2명)</li>
            </ul>
          </>
        )}
      </div>
      <div className="card-content">
        <div className="table">
          <div className="row">
            <div className="row-item">혜택 목록</div>
            <div className="row-item">계산</div>
            <div className="row-item">혜택 금액</div>
          </div>
          <div className="row">
            <div className="row-item">신규채용지원금</div>
            <div className="row-item">960만원 x 1명</div>
            <div className="row-item amount">9,600,000원</div>
          </div>
          <div className="row multi-line">
            <div className="row-item">청년추가고용장려금</div>
            <div className="row-item">1,100만원 x 2명</div>
            <div className="row-item amount">22,000,000원</div>
          </div>
          {isMobile ? false : (
            <>
              <div className="row multi-line">
                <div className="row-item">기업부설연구소 설립</div>
                <div className="row-item">3,500만원 x 2명 {isMobile ? false : <>x 25%</>}</div>
                <div className="row-item amount">17,500,000원</div>
              </div>
            </>
          )}
          <div className="row">
            <div className="row-item">기타채용지원금</div>
            <div className="row-item">2,500만원 x 1명</div>
            <div className="row-item amount">25,000,000원</div>
          </div>
        </div>
        <div className="skip">
          <span />
          <span />
          <span />
        </div>
        <div className="row total">
          <div className="row-item">합계</div>
          <div className="row-item total-amount" style={{ color: '#A965FF' }}>
            연간 82,200,000원 혜택
          </div>
          <div className="row-item" />
        </div>
      </div>
    </div>
  );
};

export default BenefitCardB;
