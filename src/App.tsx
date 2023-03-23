import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Visual from "./components/Visual";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --color-white: #ffffff;
    --color-black: #000000;
    --color-visual-bg: #99ccff;
    --color-footer-black: #222;
    --color-border-gray: #e5e5e5;
    --color-gmail: #df0f0f;
    --color-kakao-background: #f9e000;
    --color-kakao: #3c1212;
    --color-youtube: #c4302b;
    --color-html: #f67925;
    --color-css: #379ad6;
    --color-js: #f7e018;
    --color-ts: #007acc;
    --color-react: #61dbfb;    
    
    
}

  * {
    box-sizing: border-box;
    }

    body {
    margin: 0;
    padding: 0;
    font-family: 'Nanum Gothic', 'Roboto',sans-serif;
    
    }

    ul,li {
    list-style: none;
    padding: 0;
    margin: 0;
}

    button {
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

    a{
    text-decoration:none;
    color: black;
}

`;

function App() {
    return (
        <>
            <GlobalStyle />
            <div>
                <Header />
                <Visual />
                <Skills />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
