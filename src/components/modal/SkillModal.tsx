import styled from "styled-components";

interface SkillModalProps {
    Modal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

const SkillModal = ({ Modal, title }: SkillModalProps) => {
    return (
        <SkillModalWrap onClick={() => Modal(false)}>
            <SkillModalInner>
                <p>{title}</p>
                <p>내가 할수있는것</p>
                <p>공부해야할것</p>
            </SkillModalInner>
        </SkillModalWrap>
    );
};

const SkillModalWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 220%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
`;
const SkillModalInner = styled.div`
    position: absolute;
    top: 25%;
    left: 25%;
    background: white;
    width: 50%;
    height: 25%;
`;

export default SkillModal;
