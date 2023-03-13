import styled, { css } from "styled-components";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import EmailModal from "./modal/EmailModal";
import { useState } from "react";

const Contact = () => {
    const [modal, setModal] = useState(false);
    const handleModal = () => setModal(!modal);
    return (
        <ContactWrap id="Contact">
            <ContactInner>
                <h2>Contact Me</h2>
                <ContactContent>
                    <a
                        href="https://github.com/tmdgus95"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledAiFillGithub />
                    </a>
                    <StyledSiGmail onClick={handleModal} />
                    {modal && <EmailModal handleModal={handleModal} />}
                </ContactContent>
            </ContactInner>
        </ContactWrap>
    );
};

const IconStyle = css`
    width: 150px;
    height: 150px;
    margin: 40px 40px;
    &:hover {
        transform: scale(1.1);
        transition: all 300ms ease-in-out;
    }
`;

const ContactWrap = styled.div`
    text-align: center;
    padding: 75px 15px;
    background: var(--color-white);
`;

const ContactInner = styled.div``;

const ContactContent = styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledAiFillGithub = styled(AiFillGithub)`
    color: var(--color-black);
    ${IconStyle}
`;

const StyledSiGmail = styled(SiGmail)`
    color: var(--color-gmail);
    cursor: pointer;
    ${IconStyle}
`;

export default Contact;
