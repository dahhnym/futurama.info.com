import styled from "@emotion/styled"
import React from "react"
import { Navigation } from "."

export const Layout: React.FC = ({ children }) => {
  return (
      <div>
        <Navigation />
        <div>
        <Main>
            { children }
        </Main>
        </div>
      </div>
  )
}

const Main = styled.main`
    padding: 20px;
    max-width: 1580px;
    margin: 0 auto;
    position: relative;
    top: 60px;
`
