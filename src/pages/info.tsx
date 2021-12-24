import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { InfoData } from '../types/info';

const InfoPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/info', fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Button href="./">Back</Button>
            <Heading>This is Info Page.</Heading>
            {data.map((info: InfoData) => {
                const {synopsis, yearsAired, creators, id } = info;
    
                return (
                    <div key={`futurama-showinfo-${id}`}>
                        <Synopsis>synopsis: {synopsis}</Synopsis>
                        <YearsAired>yearsAired: {yearsAired}</YearsAired>
                        <p>{creators[0].name}</p>
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

const Synopsis = styled.p`
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 10px;
`

const YearsAired = styled.p`
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 10px;
`

export default InfoPage;