import styled, { css } from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { PortfolioCardProps } from "../../util/PortfolioCard";

const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
    const { title, feature, skills, img, site, git, youtube, iframe } =
        portfolio;

    return (
        <PortfolioCardWrap>
            <PortfolioCardInner>
                <h3>{title}</h3>
                <PortfolioCardContent>
                    {iframe ? (
                        <Video>
                            <iframe
                                width="500"
                                height="500"
                                src={iframe}
                                title="허니머니 그린"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </Video>
                    ) : (
                        <img src={img} alt="포트폴리오 이미지" />
                    )}

                    <div>
                        <div>
                            <p>주요기능</p>
                            <p>{feature.join(", ")}</p>
                        </div>
                        <br />
                        <br />
                        <div>
                            <p>사용기술</p>
                            <p>{skills.join(", ")}</p>
                        </div>

                        <br />
                        <br />

                        <a
                            href={site}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            사이트로 이동
                        </a>

                        <br />
                        <br />

                        <div>
                            <a
                                href={git}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <StyledAiFillGithub />
                            </a>
                            <a
                                href={youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <StyledAiFillYoutube />
                            </a>
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
        min-width: 100px;
    }

    p {
        text-align: left;
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

const Video = styled.div`
    max-width: 40%;
`;

const IconStyle = css`
    width: 200px;
    height: 200px;
    &:hover {
        transform: scale(1.1);
        transition: all 300ms ease-in-out;
    }
`;

const StyledAiFillGithub = styled(AiFillGithub)`
    margin-left: 30px;
    margin-right: 30px;
    color: var(--color-black);
    ${IconStyle}
    @media (max-width: 768px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`;

const StyledAiFillYoutube = styled(FaYoutube)`
    color: var(--color-youtube);
    ${IconStyle}
`;

export default PortfolioCard;
