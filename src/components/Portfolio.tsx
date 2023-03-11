import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import PortfolioCard from "./card/PortfolioCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 400,
        });
    }, []);
    return (
        <PortfolioWrap id="Portfolio">
            <PortfolioInner>
                <PortfolioContent>
                    <h2>Portfolio</h2>

                    <StyledPortfolioSwiper
                        data-aos="fade-up"
                        cssMode={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel={true}
                        keyboard={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <StyledPortfolio>
                            <PortfolioCard />
                        </StyledPortfolio>
                        <StyledPortfolio>
                            <PortfolioCard />
                        </StyledPortfolio>
                        <StyledPortfolio>
                            <PortfolioCard />
                        </StyledPortfolio>
                        <StyledPortfolio>
                            <PortfolioCard />
                        </StyledPortfolio>
                        <StyledPortfolio>
                            <PortfolioCard />
                        </StyledPortfolio>
                    </StyledPortfolioSwiper>
                </PortfolioContent>
            </PortfolioInner>
        </PortfolioWrap>
    );
};

const PortfolioWrap = styled.div`
    padding: 5px 5px;
`;
const PortfolioInner = styled.div`
    max-width: 1280px;
    margin: 80px auto;
`;
const PortfolioContent = styled.div`
    text-align: center;
    height: 70vh;
    h2 {
        padding-bottom: 50px;
    }
`;

const StyledPortfolioSwiper = styled(Swiper)`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    .swiper-button-next {
        right: 10px; /* 오른쪽으로 10px 이동 */
    }
`;

const StyledPortfolio = styled(SwiperSlide)`
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Portfolio;
