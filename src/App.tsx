import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Visual from "./components/Visual";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    }

    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
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
