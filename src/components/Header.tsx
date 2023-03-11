import styled from "styled-components";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <p>JSH</p>
                <HeaderNav>
                    <ul>
                        <li>
                            <Link
                                to="Visual"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Visual
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Portfolio"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </HeaderNav>
            </HeaderInner>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-border-gray);
    z-index: 6;
`;

const HeaderInner = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    width: 100vw;
    max-width: 1280px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderNav = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
    }

    li {
        margin: 1rem;
        position: relative;
    }

    li:hover {
        cursor: pointer;
    }

    li::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0%;
        height: 2px;
        background-color: var(--color-black);
        transition: width 0.2s ease-in-out;
    }

    li:hover::after {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        ul {
            display: none;
        }
    }
`;

export default Header;
