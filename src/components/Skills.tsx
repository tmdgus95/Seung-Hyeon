import styled, { css } from "styled-components";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import SkillModal from "./modal/SkillModal";
import { useState } from "react";

const Skills = () => {
    const [htmlModal, setHtmlModal] = useState(false);
    const [cssModal, setCssModal] = useState(false);
    const [jsModal, setJSModal] = useState(false);
    const [tsModal, setTSModal] = useState(false);
    const [reactModal, setReactModal] = useState(false);
    const [gitModal, setGitModal] = useState(false);
    return (
        <SkillWrap>
            <h2>Skills</h2>
            <SkillContainer>
                <StyledFaHtml5 onClick={() => setHtmlModal(!htmlModal)} />
                {htmlModal && (
                    <SkillModal Modal={setHtmlModal} title={"HTML5"} />
                )}
                <StyledFaFaCss3Alt onClick={() => setCssModal(!htmlModal)} />
                {cssModal && <SkillModal Modal={setCssModal} title={"CSS"} />}
                <StyledFaSiJavascript onClick={() => setJSModal(!htmlModal)} />
                {jsModal && (
                    <SkillModal Modal={setJSModal} title={"JAVASCRIPT"} />
                )}
                <StyledFaSiTypescript onClick={() => setTSModal(!htmlModal)} />
                {tsModal && (
                    <SkillModal Modal={setTSModal} title={"TYPESCRIPT"} />
                )}
                <StyledFaSiReact onClick={() => setReactModal(!htmlModal)} />
                {reactModal && (
                    <SkillModal Modal={setReactModal} title={"REACT"} />
                )}
                <StyledAiFillGithub onClick={() => setGitModal(!htmlModal)} />
                {gitModal && <SkillModal Modal={setGitModal} title={"GIT"} />}
            </SkillContainer>
        </SkillWrap>
    );
};

const SkillWrap = styled.div`
    text-align: center;
    max-width: 1280px;
    margin: 0 auto;
`;

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
    color: var(--color-html);
    ${IconStyle}
`;
const StyledFaFaCss3Alt = styled(FaCss3Alt)`
    color: var(--color-css);
    ${IconStyle}
`;
const StyledFaSiJavascript = styled(SiJavascript)`
    color: var(--color-js);
    ${IconStyle}
`;
const StyledFaSiTypescript = styled(SiTypescript)`
    color: var(--color-ts);
    ${IconStyle}
`;
const StyledFaSiReact = styled(SiReact)`
    color: var(--color-react);
    ${IconStyle}
`;
const StyledAiFillGithub = styled(AiFillGithub)`
    color: var(--color-black);
    ${IconStyle}
`;

export default Skills;
