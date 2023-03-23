import styled from "styled-components";

interface SkillModalProps {
    Modal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    contents?: string[];
}

const SkillModal = ({ Modal, title, contents }: SkillModalProps) => {
    return (
        <SkillModalWrap onClick={() => Modal(false)}>
            <SkillModalInner>
                <h3>{title}</h3>
                <ul>
                    {contents?.map((content, i) => (
                        <li key={i}>{content}</li>
                    ))}
                </ul>
            </SkillModalInner>
        </SkillModalWrap>
    );
};

const SkillModalWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 282%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    h3 {
        font-size: 32px;
        color: var(--color-visual-bg);
    }
`;
const SkillModalInner = styled.div`
    position: absolute;
    top: 32.5%;
    left: 32.5%;
    background: var(--color-white);
    width: 35%;
    height: 10%;
    border-radius: 60px 0 60px 0;
    li {
        font-size: 18px;
        margin-bottom: 16px;
    }

    @media (max-width: 1279px) and (min-width: 768px) {
        top: 37%;
        height: 20%;
    }

    @media (max-width: 767px) {
        top: 47%;
    }
`;

export default SkillModal;
