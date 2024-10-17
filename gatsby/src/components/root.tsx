import MainMenu from "./header";
import styled from '@emotion/styled';
import React from "react";
import "@fontsource/titillium-web"; 
import Footer from "./footer";

interface IndexProps {
    children: React.JSX.Element | React.JSX.Element[] | undefined | null 
}

const Index: React.FC<IndexProps> = ({ children = null }) => {
    const Root = styled.span`
        font-family: "Titillium Web";
        background: #2c3e50;
        color: #fff;
        height: 100vh;
        width: 100vw;
        margin: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    `;
  
    return (
      <Root>
        <MainMenu />
        {children}
        <Footer />
       </Root>
    );
}

export default Index