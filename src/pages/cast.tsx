import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { CastData } from "../types/cast";


const CastPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/cast', fetcher);

    if(error) return <Error />
    if(!data) return <Loading />


    return (
        <div>
            <Button href="./">Back</Button>
            <Heading>This is Info Page.</Heading>
            {data.map((cast: CastData) => {
                const {name, born, bio, id } = cast;
    
                return (
                    <div key={`futurama-cast-${id}`}>
                        <p>Name: {name}</p>
                        <p>Born: {born}</p>
                        <p>IMDb: <a href={bio.url}>{bio.url}</a></p>
                    </div>
                )
            })}
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

export default CastPage;