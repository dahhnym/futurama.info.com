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
        <Link href="/"><a><Title></Title></a></Link>
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
    box-shadow: 0px 2px 5px #f2f2f2;
    height: 80px;
`
const Title = styled.div`
    &:hover{
        cursor: pointer;
    }
    display: block;
    width: 200px;
    height: 50px;    
    background: center / cover no-repeat url("http://s3.amazonaws.com/gt7sp-prod/decal/24/50/23/5116169452536235024_1.png");

`

const Logo = styled.img`
    height: 100px;
    object-fit:contain;
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


