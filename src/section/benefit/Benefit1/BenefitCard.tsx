import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MobileBr } from '../../../shared/MobileBr';

const BenefitCard = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1200px)'
  });

  return (
    <div className="card">
      <div className="card-header">
        {isMobile ? (
          <p className="card-title">#매출액 3억 #종업원 4명 (신규채용 2명)</p>
        ) : (
          <>
            <p className="card-title">개인 사업자</p>
            <ul>
              <li>매출액 3억</li>
              <li>종업원 4명 (신규채용 2명)</li>
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
            <div className="row-item">청년추가고용장려금</div>
            <div className="row-item">1,100만원 x 2명</div>
            <div className="row-item amount">22,000,000원</div>
          </div>
          <div className="row multi-line">
            <div className="row-item">일자리안정자금</div>
            <div className="row-item">3만원/월 x 4명<MobileBr /> x 6개월</div>
            <div className="row-item amount">720,000원</div>
          </div>
          <div className="row multi-line">
            <div className="row-item">두루누리지원금</div>
            <div className="row-item">16만원/월 x 2명<MobileBr /> x 12개월</div>
            <div className="row-item amount">3,840,000원</div>
          </div>
        </div>
        <div className="row total">
          <div className="row-item">합계</div>
          <div className="row-item total-amount">연간 26,560,000원 혜택</div>
          <div className="row-item"></div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
