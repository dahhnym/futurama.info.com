import { NextPage } from "next";
import styled from "@emotion/styled";

const EpisodeIndexPage: NextPage = () => {
    return (
        <div>
            <Button href="./">Back</Button>
            <Heading>This is Episode Page.</Heading>
        </div>
    )
}

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

export default EpisodeIndexPage;