import Link from "next/link";
import styled from "@emotion/styled";
import { ROUTES } from "../../constants";
import { css } from "@emotion/css";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<ROUTE>;
}

export const Navigation = () => {
  return (
    <header>
      <NavContainer>
        <Title href="/">Futurama Info</Title>
        <Nav>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <Menu key={`main-menu-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
                <SubMenu>
                  {routeObject.SUBS &&
                    routeObject.SUBS.map((subRouteObject: ROUTE) => {
                      return (
                        <li key={`sub-menu-${subRouteObject.ID}`}>
                          <Link
                            href={`${routeObject.PATH}${subRouteObject.PATH}`}
                          >
                            <a>{subRouteObject.LABEL}</a>
                          </Link>
                        </li>
                      );
                    })}
                </SubMenu>
              </Menu>
            );
          })}
        </Nav>
      </NavContainer>
    </header>
  );
};


const NavContainer = styled.nav`
    border: solid 1px red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    min-width: min-content;
`
const Title = styled.a`
    font-size: 2rem;
    font-weight: 600;
`

const Nav = styled.ul`
    display: flex;
`

const SubMenu = styled.ul`
    display: none;
`

const Menu = styled.li`
    margin: 20px;
    font-weight: 600;
    color: blue;
    /* &:hover {
        color: #aab;
    }; */
`


