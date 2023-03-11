import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrap>
            <FooterInner>
                <p>Copyright ⓒ Jo Seung Hyeon All Right Reserved.</p>
            </FooterInner>
        </FooterWrap>
    );
};

const FooterWrap = styled.div`
    height: 80px;
`;

const FooterInner = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-footer-black);
    color: var(--color-white);
`;

export default Footer;
