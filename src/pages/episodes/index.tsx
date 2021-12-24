import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../../components'
import { EpisodeData } from "../../types/episodes";

const EpisodeIndexPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/episodes', fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Button href="./">Back</Button>
            <Heading>This is Episode Page.</Heading>
            {data.map((episode: EpisodeData) => {
                const {number, title, writers, originalAirDate, desc, id } = episode;
    
                return (
                    <div key={`futurama-episode-${id}`}>
                        <p>Episode#: {number}</p>
                        <p>Title: {title}</p>
                        <p>originalAirDate: {originalAirDate}</p>
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

export default EpisodeIndexPage;