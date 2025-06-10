import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../../components/base'
import { FooterPromotion } from '../../components/base/FooterPromotion'
import { Header } from '../../components/base/Header'
import './PromotionDetail.scss'

// 프로모션 상세 페이지
const PromotionDetail = () => {
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    console.log(`프로모션 ID: ${id}`)
  }, [id])

  return !loaded ? (
    <></>
  ) : (
    <>
      <Header />
      {id === '0' && <Promotion0 />}
      {id === '1' && <Promotion1 />}
      <FooterPromotion />
    </>
  )
}

export default PromotionDetail

// 0번 프로모션 페이지 내용
const Promotion0 = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search])
  const isReceiver = queryParams.get('isReceiver') === 'true'
  const LIST_ARRAY = [
    {
      step: 'STEP 1',
      person: isReceiver ? '' : '추천인',
      desc: isReceiver ? (
        <p className="font-extrabold text-base text-[#313131]">
          신청페이지 접속 후 원하는 타입 및 기간 선택
        </p>
      ) : (
        <p className="font-extrabold text-base text-[#313131]">
          친구에게 밸런스 스페이스 추천과 함께 이벤트 공유하기
        </p>
      ),
      img: isReceiver ? '/assets/promotion/list5.png' : '/assets/promotion/list1.png',
    },
    {
      step: 'STEP 2',
      person: isReceiver ? '' : '친구',
      desc: isReceiver ? (
        <p className="font-extrabold text-base text-[#313131]">
          상담신청 &gt; 문의사항에
          <br />
          <span className="text-[#5D73FF]">[추천인 성함 / 추천인 번호]</span> 기재하여 신청
        </p>
      ) : (
        <p className="font-extrabold text-base text-[#313131]">
          상담신청 &gt; 문의사항에
          <br />
          <span className="text-[#5D73FF]">[추천인 성함 / 추천인 번호]</span> 기재하여 신청
        </p>
      ),
      img: '/assets/promotion/list2.png',
    },
    {
      step: 'STEP 3',
      person: isReceiver ? '' : '친구',
      desc: isReceiver ? (
        <p className="font-extrabold text-base text-[#313131]">
          추천인 정보 확인 후<br />
          담당자와 계약 진행
          <br />
          <span className="text-[#8b8b8b]">(전담 매니저 개별 연락)</span>
        </p>
      ) : (
        <p className="font-extrabold text-base text-[#313131]">
          추천인 정보 확인 후<br />
          담당자와 계약 진행
          <br />
          <span className="text-[#8b8b8b]">(전담 매니저 개별 연락)</span>
        </p>
      ),
      img: '/assets/promotion/list3.png',
    },
    {
      step: 'STEP 4',
      person: isReceiver ? '' : '추천인&친구',
      desc: isReceiver ? (
        <p className="font-extrabold text-base text-[#313131]">
          계약 완료 후
          <br />
          모바일 상품권 전달
        </p>
      ) : (
        <p className="font-extrabold text-base text-[#313131]">
          계약 완료 후
          <br />
          모바일 상품권 전달
        </p>
      ),
      img: '/assets/promotion/list4.png',
    },
  ]
  const handleShare = async () => {
    const url = (() => {
      const url = new URL(window.location.href)
      const params = new URLSearchParams(url.search)

      // utm_source가 이미 있으면 덮어쓰기, 없으면 추가
      params.set('utm_source', 'promotion')

      // isReceiver가 이미 있어도 무조건 true로 설정
      params.set('isReceiver', 'true')

      return `${window.location.origin}${url.pathname}?${params.toString()}`
    })()

    if (navigator.share) {
      try {
        await navigator.share({
          title: '밸스 프로모션',
          text: '밸스의 혜택을 친구와 함께!',
          url,
        })
      } catch (error) {
        console.error('공유 실패:', error)
      }
    } else {
      try {
        await navigator.clipboard.writeText(url)
        alert('링크가 복사되었습니다.')
      } catch {
        alert('링크 복사에 실패했습니다.')
      }
    }
  }

  return (
    <>
      <div className="promotion-detail-container">
        {/* 0번 프로모션 내용 */}
        <div className="hero-section flex items-center justify-center w-full h-[580px] pt-[68px] 1200r:pt-[136px] 1200r:h-[600px]">
          <div className="inner-width flex items-center justify-between 1200r:flex-col">
            <div className="left text-left 1200r:text-center">
              <h1 className="text-[60px] leading-[78px] font-black text-[#fff] 1200r:text-[34px] 1200r:leading-[46px]">
                밸런스 스페이스
                <br />
                <span className="opacity-80">친구 추천 프로모션</span>
              </h1>
              <p className="mt-[48px] font-black text-[#fff] text-[26px] leading-[34px] 1200r:mt-[30px] 1200r:text-[20px] 1200r:leading-[30px]">
                밸런스 스페이스 <span className="opacity-70">추천하고</span>
                <br />
                <span className="opacity-70">친구도 나도</span> 5만원 상품권{' '}
                <span className="opacity-70">받아가세요!</span>
              </p>
            </div>
            <div className="right">
              <img
                src={'/assets/promotion/hero.png'}
                className="w-[481px] h-auto inline-block 1200r:hidden"
                alt=""
              />
              <img
                src={'/assets/promotion/hero-m.png'}
                className="1200r:w-[290px] 1200r:h-auto hidden 1200r:inline-block"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* 프로모션 혜택 */}
        <section className="pt-[80px] font-extrabold pb-[120px] text-center flex items-center flex-col w-full 1200r:mx-5 1200r:py-[12px] 1200r:pt-[60px]">
          <h3 className="text-4xl font-extrabold mb-[60px] 1200r:text-2xl 1200r:mb-[30px]">
            프로모션 혜택
          </h3>
          <div className="grid grid-cols-2 gap-[80px] max-w-[840px] 1200r:grid-cols-1 1200r:w-full">
            {/* 친구혜택 */}
            <div className="flex flex-col items-center relative 1200r:mx-[27.8px]">
              <span className="text-[20px] bg-[#E9ECFF] text-[#2D5BFF] py-[6px] px-[20px] rounded-full inline-block mb-[24px] 1200r:text-[14px] 1200r:leading-[24px] 1200r:py-[4px] 1200r:px-[16px] 1200r:mb-[20px]">
                친구 혜택
              </span>
              <div className="-translate-y-12">
                <img
                  src="/assets/promotion/coupon1.png"
                  alt="쿠폰 이미지"
                  className="w-full translate-y-12"
                />
                <div className="p-7 pt-[76px] bg-[#F1F6FF] w-full rounded-2xl h-[260px] 1200r:h-[230px]">
                  <h4 className="text-[#5D73FF] text-[22px] font-extrabold mb-[12px] 1200r:text-[18px] 1200r:leading-[28px] 1200r:mb-[8px]">
                    추천인 통해 계약 완료 시
                  </h4>
                  <p className="text-[20px] text-bold mb-5 text-[#313131] 1200r:text-[16px] 1200r:leading-[26px] 1200r:mb-[12px]">
                    백화점 상품권 5만원 증정
                    <br />+ 최대 3개월 추가 혜택
                  </p>
                  <p className="text-xs font-medium text-[#828282] flex flex-wrap items-center justify-center 1200r:text-[14px] 1200r:leading-[22px]">
                    {['6,12개월 +1개월', '24개월 +2개월', '36개월 +3개월'].map(
                      (item, index, arr) => (
                        <React.Fragment key={index}>
                          <span className="text-xs font-medium text-[#828282]">{item}</span>
                          {index !== arr.length - 1 && (
                            <span
                              className="w-px h-2 bg-[#B8B8B8] inline-block mx-2 align-middle"
                              aria-hidden="true"
                            />
                          )}
                        </React.Fragment>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* 내혜택 */}
            <div className="flex flex-col items-center relative 1200r:mx-[27.8px]">
              <span className="text-[20px] bg-[#DCF1FF] text-[#1489D8] py-[6px] px-[20px] rounded-full inline-block mb-[24px] 1200r:text-[14px] 1200r:leading-[24px] 1200r:py-[4px] 1200r:px-[16px] 1200r:mb-[20px]">
                내 혜택
              </span>
              <div className="-translate-y-12">
                <img
                  src="/assets/promotion/coupon2.png"
                  alt="쿠폰 이미지"
                  className="w-full translate-y-12"
                />
                <div className="p-7 pt-[76px] bg-[#F1F6FF] w-full rounded-2xl h-[260px] 1200r:h-[230px]">
                  <h4 className="text-[#5D73FF] text-[22px] font-extrabold mb-[12px] 1200r:text-[18px] 1200r:leading-[28px] 1200r:mb-[8px]">
                    친구 계약 완료 시
                  </h4>
                  <p className="text-[20px] text-bold mb-5 text-[#313131] h-[60px] flex items-center justify-center 1200r:text-[16px] 1200r:leading-[26px] 1200r:mb-0 1200r:h-[52px]">
                    백화점 상품권 5만원 증정
                  </p>

                  <p className="text-xs font-medium text-[#828282] flex flex-wrap items-center justify-center 1200r:text-[14px] 1200r:leading-[22px]">
                    계약한 친구 수 만큼 무제한 상품권 지급
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F4F7] py-[120px] text-center flex flex-col items-center 1200r:py-[60px]">
          <h3 className="text-4xl font-extrabold mb-[60px] 1200r:text-2xl 1200r:leading-[36px] 1200r:mb-[30px]">
            프로모션 참여 방법
          </h3>

          <div className="grid gap-6 grid-cols-4 max-w-[1080px] 1200r:grid-cols-1 1200r:w-full 1200r:px-[20px]">
            {LIST_ARRAY.map(({ step, person, desc, img }, i) => (
              <div className="relative">
                <div
                  key={i}
                  className="list-icon h-full  list-shadow bg-white p-4 pb-[34px] rounded-xl text-center 1200r:flex 1200r:gap-4 1200r:items-center 1200r:p-5"
                >
                  <img
                    src={img}
                    alt={step}
                    className="w-[160px] h-[160px] mx-auto mb-[24px] 1200r:w-[80px] 1200r:h-[80px] 1200r:mx-0 1200r:mb-0 "
                  />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#A9A9A9] mb-2 text-left px-[20px]">
                      {step}{' '}
                      <span className="text-[#5D73FF] font-extrabold text-sm text-left">
                        {person}
                      </span>
                    </h4>
                    <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap text-left px-[20px]">
                      {desc}
                    </div>
                  </div>
                </div>

                {/* 화살표 아이콘 추가 (마지막이 아닐 경우만) */}
                {i !== LIST_ARRAY.length - 1 && (
                  <img
                    src="/assets/promotion/arrow-right.png"
                    alt="arrow"
                    className="absolute -right-[40px] top-1/2 -translate-y-1/2 w-[56px] h-[56px] z-[9999] block
                    1200r:right-auto 1200r:top-auto 1200r:translate-y-0 1200r:left-1/2 1200r:-translate-x-1/2 1200r:-bottom-10 1200r:rotate-90 1200r:w-[48px] 1200r:h-[48px]
                    "
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA 영역 */}
          <div className="pt-[120px] 1200r:pt-[60px]">
            {isReceiver ? (
              <button
                className="button-shadow bg-[#5D73FF] text-[#F9FAFB] font-bold px-[54px] py-[27px] rounded-full text-2xl 1200r:px-[40px] 1200r:py-[16px] 1200r:text-base"
                onClick={() => {
                  const search = location.search
                  navigate(`/consult2${search}`)
                }}
              >
                5만원 상품권 + 추가 기간 혜택 받기 🎁
              </button>
            ) : (
              <button
                className="button-shadow  bg-[#5D73FF] text-[#F9FAFB] font-bold px-[54px] py-[27px] rounded-full text-2xl 1200r:px-[60px] 1200r:py-[16px] 1200r:text-base"
                onClick={handleShare}
              >
                친구에게 공유하기 📩
              </button>
            )}
          </div>
        </section>

        <section className="bg-[#F5F7FF] py-[60px] text-xs text-[#828282] flex flex-col items-center 1200r:py-[40px] 1200r:text-[12px] 1200r:leading-5 1200r:px-5 border-b border-[#E6E6E6]">
          <div className="inner-width">
            <h3 className="text-xl text-[#313131] font-extrabold mb-[16px] text-left 1200r:text-[14px] 1200r:leading-[26px] 1200r:mb-[12px]">
              유의사항
            </h3>
            <ul className="list-disc list-inside space-y-2 text-left pl-[20px]">
              <li className="list-disc ">
                본 프로모션은 밸런스 스페이스와 현재 계약 중이거나, 과거 계약 이력이 있는 고객만
                추천인으로 참여하실 수 있습니다.
              </li>
              <li className="list-disc ">
                추천한 친구가 계약을 완료할 때마다 횟수 제한 없이 상품권을 지급받을 수 있습니다.
              </li>
              <li className="list-disc ">
                본 프로모션은 다른 이벤트 또는 할인 혜택과 중복 적용이 제한될 수 있습니다.
              </li>
              <li className="list-disc ">
                지급되는 상품권은 계약 완료 후 일정 기간 내 발송되며, 사정에 따라 발송 시점이 조정될
                수 있습니다.
              </li>
              <li className="list-disc ">
                본 프로모션은 당사 사정에 따라 사전 공지 없이 변경되거나 종료될 수 있습니다.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

// 1번 프로모션 페이지 내용 (추후 생길 경우 추가)
const Promotion1 = () => {
  return (
    <>
      <div>1번 프로모션 내용</div>
    </>
  )
}
