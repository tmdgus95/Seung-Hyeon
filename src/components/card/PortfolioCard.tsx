import styled from "styled-components";

// title, feature, git 주소, 배포 주소, stack

const PortfolioCard = () => {
    return (
        <PortfolioCardWrap>
            <PortfolioCardInner>
                <h3>담화마켓</h3>
                <PortfolioCardContent>
                    <img
                        src="/images/포트폴리오임시이미지.jpg"
                        alt="포트폴리오 이미지"
                    />
                    <div>
                        <div>
                            <p>주요기능</p>
                            <p>술 검색기능,장바구니 기능,구매 기능,쿠폰 기능</p>
                        </div>

                        <div>
                            <p>깃</p>
                            <p>레파지토리 주소</p>
                        </div>

                        <div>
                            <p>링크</p>
                            <p>링크주소</p>
                        </div>

                        <div>
                            <p>사용기술</p>
                            <p>리액트 쿼리, 리액트 라우터 돔, Tailwind CSS</p>
                        </div>
                    </div>
                </PortfolioCardContent>
            </PortfolioCardInner>
        </PortfolioCardWrap>
    );
};

const PortfolioCardWrap = styled.div`
    max-width: 1280px;
    width: 1280px;
    height: 100%;
    margin-bottom: 80px;
`;
const PortfolioCardInner = styled.div`
    width: 100%;

    h3 {
        padding: 40px;
    }
`;
const PortfolioCardContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    img {
        width: 40%;
        height: 500px;
    }
    div {
        width: 40%;
        margin-left: 30px;
    }
    div > div {
        width: 100%;
        display: flex;
    }
    div > div > :nth-child(1) {
        text-align: left;
        width: 100px;
    }
    p {
        margin: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        img {
            width: 80%;
            margin-bottom: 20px;
        }
        div {
            margin-left: 0;
            width: 80%;
        }
    }
`;

export default PortfolioCard;
