// src/pages/promotion/PromotionDetail.tsx
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../../components/base'
import { Header } from '../../components/base/Header'
import './Promotion.scss'

const Promotion = () => {
  const [loaded, setLoaded] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const promotions = [
    {
      title: '친구 추천 프로모션',
      date: '2025. 06. 01 -',
      img: '/assets/promotion/thumbnail1.png',
      link: '/promotion/0',
    },
  ]

  useEffect(() => {
    setLoaded(true)
  }, [])

  return !loaded ? (
    <></>
  ) : (
    <>
      <Header />
      <div className="promotion-container ">
        <div
          className="hero-section pt-[68px] h-[448px] w-full flex flex-col justify-center items-center
        1200r:h-[272px] 1200r:pt-[56px]
        "
        >
          <img
            src="/assets/promotion/star.png"
            className="w-[34px] h-[34px]
          1200r:w-[24px] 1200r:h-[24px]
          "
          />
          <h1
            className="text-[60px] leading-[72px] font-black text-[#5D73FF] mt-2
          1200r:leading-[42px] 1200r:mt-1 1200r:text-[30px]
          "
          >
            밸런스 스페이스
            <br />
            <span className="text-[#4B4B4B]">프로모션</span>
          </h1>
          <p
            className="text-[20px] leading-[30px] mt-[40px]
          1200r:mt-[20px] 1200r:text-[14px] 1200r:leading-[22px]
          "
          >
            프리미엄 비상주 사무실을
            <br />
            특별한 혜택과 함께 만나보세요.
          </p>
        </div>

        {/* list */}
        {/* Promotion List */}
        <section
          className="grid grid-cols-3 gap-x-[30px] gap-y-[48px] max-w-[1080px] w-full pt-[80px] pb-[120px]

        1200r:grid-cols-1 1200r:pt-[40px] 1200r:pb-[40px] 1200r:px-[25px] 1200r:gap-y-[18px]"
        >
          {promotions.map((promo, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-xl overflow-hidden shadow-sm transition-transform hover:scale-[1.02]"
              onClick={() => navigate(promo.link)}
            >
              <img src={promo.img} alt={promo.title} className="w-full object-cover" />
              <div
                className="pt-4 text-left
              1200r:pt-3
              "
              >
                <h3
                  className="text-[24px] leading-[34px] text-[#313131] font-bold mb-1
                1200r:mb-[2px] 1200r:text-[16px] 1200r:leading-[26px]
                "
                >
                  {promo.title}
                </h3>

                <p
                  className="text-[18px] leading-[28px] text-[#828282] font-medium
                1200r:text-[14px] 1200r:leading-[24px]
                "
                >
                  {promo.date}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Promotion
