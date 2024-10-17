import * as React from "react";
import type { PageProps } from "gatsby";
import { HighlightContainer, Highlight, HighlightHead } from "../components/highlight";
import Index from "../components/root";
import DecoratedImage from "../components/decoratedimage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Index>
      <HighlightContainer>
        <Highlight>
          <HighlightHead>
            👋🏻, I am Jeroen Vijgen 
          </HighlightHead>
          I am a full-stack developer living in Helsinki, Finland.
          <br /><br />
          I have 4 years of experience using Python, React, Angular and TypeScript to develop both the behind-the-scenes (back-end) and user-facing (front-end) parts of web applications.<br />
          <br />
          Previously, I:
          <br />
          <ul>
            <li>Built reporting tools and dashboards at Giosg.com Oy.</li>
            <li>Automated tasks and tests to improve efficiency.</li>
            <li>Worked closely with other teams to deploy projects smoothly.</li>
          </ul>
          I'm a great communicator, team player, and always willing to learn and help others!<br />
          <h3> Under Construction! </h3>
        </Highlight>
        <Highlight>
          <DecoratedImage />
        </Highlight>
      </HighlightContainer>
    </Index>
  )
}

export default IndexPage
