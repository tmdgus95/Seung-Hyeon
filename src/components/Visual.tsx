import styled from "styled-components";

const Visual = () => {
    return (
        <VisualWrap id="Visual">
            <h1>Seung Hyeon'S PORTFOLIO</h1>
            <img src="/images/비쥬얼임시이미지.jpg" alt="메인사진" />
            <h2>안녕하세요 Front-end developer 조승현입니다.</h2>
        </VisualWrap>
    );
};

const VisualWrap = styled.div`
    width: 100%;
    height: 600px;
    text-align: center;
    margin-top: 80px;
    background-color: var(--color-visual-bg);
    padding: 75px 15px;
    color: var(--color-white);
    h2 {
        font-size: 26px;
        font-weight: 700;
    }
    h3 {
        font-size: 19px;
    }
    img {
        margin: 20px 0;
        width: 250px;
        height: 250px;
        border-radius: 100%;
    }
`;

export default Visual;
