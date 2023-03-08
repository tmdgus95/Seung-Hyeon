import styled, { css } from "styled-components";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Skills = () => {
    return (
        <SkillWrap>
            <h2>Skills</h2>
            <SkillContainer>
                <StyledFaHtml5 />
                <StyledFaFaCss3Alt />
                <StyledFaSiJavascript />
                <StyledFaSiTypescript />
                <StyledFaSiReact />
                <StyledAiFillGithub />
            </SkillContainer>
        </SkillWrap>
    );
};

const SkillContainer = styled.div`
    display: grid;
    gap: 20px;
    justify-items: center;
    align-items: center;
    padding: 20px 0px;

    @media (min-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 1279px) and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 1fr);
    }
`;

const IconStyle = css`
    width: 200px;
    height: 200px;
`;

const StyledFaHtml5 = styled(FaHtml5)`
    color: #f67925;
    ${IconStyle}
`;
const StyledFaFaCss3Alt = styled(FaCss3Alt)`
    color: #379ad6;
    ${IconStyle}
`;
const StyledFaSiJavascript = styled(SiJavascript)`
    color: #f7e018;
    ${IconStyle}
`;
const StyledFaSiTypescript = styled(SiTypescript)`
    color: #007acc;
    ${IconStyle}
`;
const StyledFaSiReact = styled(SiReact)`
    color: #61dbfb;
    ${IconStyle}
`;
const StyledAiFillGithub = styled(AiFillGithub)`
    color: #000;
    ${IconStyle}
`;

const SkillWrap = styled.div`
    text-align: center;
`;

export default Skills;
