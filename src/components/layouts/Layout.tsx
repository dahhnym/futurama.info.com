import styled from "@emotion/styled"
import React from "react"
import { Navigation } from "."

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
        { children }
    </div>
  )
}
