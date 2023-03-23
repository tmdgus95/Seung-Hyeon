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

    const htmlContent = [
        "시맨틱 태그에 대해 이해를 하고 있습니다.",
        "필수적으로 사용되는 태그의 의미를 알고 적절하게 사용할 수 있습니다.",
        "폼 요소를 이용해 사용자에게 데이터를 입력받고 서버로 보낼 수 있습니다.",
        "웹 표준과 웹 접근성을 준수하려고 노력합니다.",
    ];
    const cssContent = [
        "css선택자에 대해 이해하고 있으면 잘 활용할 수 있습니다.",
        "박스 모델에 대해 잘 알고 있으면 block과 inline에 대해 잘 알고 있습니다.",
        "flex와 grid를 이용하여 레이아웃을 잡을 수 있습니다.",
        "styledcomponent,tailwind와 같은 라이브러리를 이용하여 작업할 수 있습니다.",
    ];
    const jsContent = [
        "let,const,arroy function 같은 es6에 대해 알고 있습니다.",
        "DOM에 대해 알고있으면 조작할 수 있습니다.",
        "AJAX를 이용해서 서버와 비동기 통신을 할수있습니다.",
        "다양한 이벤트를 이벤트리스너를 통해 구현할 수 있습니다.",
    ];
    const tsContent = [
        "타입에 대해서 이해하고 있습니다.",
        "interface, type을 이용해 타입을 지정할 수 있습니다.",
        "react이벤트에 타입을 지정해 사용할 수 있습니다. ",
    ];
    const reactContent = [
        "JSX문법을 통해 컴포넌트를 구성할 수 있습니다.",
        "컴포넌트를 작은 단위로 쪼개서 재사용 가능하게 만들 수 있습니다.",
        "컴포넌트의 생애주기를 알고있으며 useEffect훅을 사용 할 수 있습니다.",
        "Context API, Redux Toolkit을 통해 상태관리를 할 수 있습니다.",
    ];
    const gitContent = [
        "GitHub을 통해 협업을 할 수 있습니다.",
        "GitKraken을 이용해 쉽게 버전 관리를 할 수 있습니다.",
        "깃 브렌치 전략이 협업에 있어서 중요하다는 것을 알고 있습니다.",
    ];
    return (
        <SkillWrap id="Skills">
            <h2>Skills</h2>
            <SkillContainer>
                <StyledFaHtml5 onClick={() => setHtmlModal(!htmlModal)} />
                {htmlModal && (
                    <SkillModal
                        Modal={setHtmlModal}
                        title={"HTML5"}
                        contents={htmlContent}
                    />
                )}
                <StyledFaFaCss3Alt onClick={() => setCssModal(!htmlModal)} />
                {cssModal && (
                    <SkillModal
                        Modal={setCssModal}
                        title={"CSS"}
                        contents={cssContent}
                    />
                )}
                <StyledFaSiJavascript onClick={() => setJSModal(!htmlModal)} />
                {jsModal && (
                    <SkillModal
                        Modal={setJSModal}
                        title={"JAVASCRIPT"}
                        contents={jsContent}
                    />
                )}
                <StyledFaSiTypescript onClick={() => setTSModal(!htmlModal)} />
                {tsModal && (
                    <SkillModal
                        Modal={setTSModal}
                        title={"TYPESCRIPT"}
                        contents={tsContent}
                    />
                )}
                <StyledFaSiReact onClick={() => setReactModal(!htmlModal)} />
                {reactModal && (
                    <SkillModal
                        Modal={setReactModal}
                        title={"REACT"}
                        contents={reactContent}
                    />
                )}
                <StyledAiFillGithub onClick={() => setGitModal(!htmlModal)} />
                {gitModal && (
                    <SkillModal
                        Modal={setGitModal}
                        title={"GIT"}
                        contents={gitContent}
                    />
                )}
            </SkillContainer>
        </SkillWrap>
    );
};

const SkillWrap = styled.div`
    text-align: center;
    max-width: 1280px;
    padding: 70px 15px;
    margin: 0 auto;

    h2 {
        padding: 30px 0;
        font-size: 32px;
        color: var(--color-visual-bg);
    }
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
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all 300ms ease-in-out;
    }
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
