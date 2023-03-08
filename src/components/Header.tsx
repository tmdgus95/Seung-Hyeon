import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <p>SHJ</p>
                <HeaderNav>
                    <ul>
                        <li>Visual</li>
                        <li>Skills</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
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
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
`;

const HeaderInner = styled.div`
    margin: 0 auto;
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
        background-color: black;
        transition: width 0.2s ease-in-out;
    }

    li:hover::after {
        width: 100%;
    }
`;

export default Header;
