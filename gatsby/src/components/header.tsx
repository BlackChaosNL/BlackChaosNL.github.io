import React from 'react';
import styled from '@emotion/styled';
import { FaCodeBranch, FaGithubSquare, FaHome, FaLinkedin } from "react-icons/fa";

const MainMenu = (): React.JSX.Element => {
  const MainMenuRoot = styled.span`
    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: left;
    align-items: left;
    flex-wrap: wrap;
    border-bottom: 1px solid #e35c38;
  `

  const MainMenuItem = styled.a`
    padding: 1.8vh;
    text-decoration: none;
    color: #e35c38;
    justify-content: center;
    align-items: center;

    :hover {
      color: #fe28a2;
    }
    :active {
      background: #b07939;
    }
    svg {
      height: 20px;
      width: 20px;
    }
  `

  return (
    <MainMenuRoot>
        <h3 style={{ paddingLeft: "20px", paddingRight: "10px" }}>Portfolio Jeroen Vijgen</h3>
        <MainMenuItem href="/"><FaHome /></MainMenuItem>
        <MainMenuItem href="https://www.linkedin.com/in/jjvijgen/" title="Linkedin"><FaLinkedin /></MainMenuItem>
        <MainMenuItem href="https://github.com/BlackChaosNL" title="Github"><FaGithubSquare /></MainMenuItem>
        <MainMenuItem href="https://github.com/BlackChaosNL/BlackChaosNL.github.io/tree/master/gatsby" title="Source code of this website" ><FaCodeBranch /></MainMenuItem>
    </MainMenuRoot>
  )
}

export default MainMenu;
