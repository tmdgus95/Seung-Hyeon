import styled from "styled-components";

const Visual = () => {
    return (
        <VisualWrap id="Visual">
            <img src="/images/비쥬얼이미지.jpg" alt="메인사진" />
            <div>
                <h1>Seung Hyeon'S PORTFOLIO</h1>
                <h2>안녕하세요 Front-end developer 조승현입니다.</h2>
            </div>
        </VisualWrap>
    );
};

const VisualWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 600px;
    text-align: center;
    margin-top: 80px;
    background-color: var(--color-visual-bg);
    padding: 75px 15px;
    color: var(--color-white);
    h1 {
        font-size: 36px;
        font-weight: 700;
    }
    h2 {
        font-size: 32px;
    }
    img {
        width: 300px;
        margin-right: 270px;
    }
`;

export default Visual;
