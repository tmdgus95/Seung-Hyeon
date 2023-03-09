import styled from "styled-components";

interface EmailModalProps {
    handleModal: () => void;
}

const EmailModal = ({ handleModal }: EmailModalProps) => {
    return <EmailAddress onClick={handleModal}>8571053@gmail.com</EmailAddress>;
};

const EmailAddress = styled.div`
    position: absolute;
    top: 0px;
    right: 29%;
    padding: 20px;
    background-color: var(--color-black);
    color: var(--color-white);
    border-radius: 15px;
    @media (max-width: 768px) {
        top: 220px;
        right: 80px;
    }
`;

export default EmailModal;
