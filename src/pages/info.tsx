import { NextPage } from "next";
import styled from "@emotion/styled";

const InfoPage: NextPage = () => {
    return (
        <div>
            <Button href="./">Back</Button>
            <Heading>This is Info Page.</Heading>
        </div>
    )
}

export default InfoPage;

const Heading = styled.h1`
    margin: 10px;
    font-size: 30px;
    font-weight: 600;
`

const Button = styled.a`
    display: inline-block;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px black;
    text-decoration: none;
    color: black;
    font-size: 15px;
`

