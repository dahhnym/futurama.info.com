import Link from "next/link";
import styled from "@emotion/styled";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<ROUTE>;
}

export const Navigation = () => {
    
    return (
    <Header>
      <NavContainer>
        <Title href="/"><a>Futurama Info</a></Title>
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
    </Header>
  );
};

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100;
`

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    min-width: min-content;
    border-bottom: solid 2px #f2f2f2;
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


