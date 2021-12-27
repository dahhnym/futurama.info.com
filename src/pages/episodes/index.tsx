import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../../components'
import { EpisodeData } from "../../types/episodes";
import { MEDIA_QUERY_ENDPOINT } from "../../constants";

const EpisodeIndexPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/episodes', fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    const handleClick = () => {
        window.scrollTo(0,0);
    }

    return (
        <Container>
            <Select name="episode" id="">
                <option value="0">Episodes</option>
                <option value="1">Season 01</option>
                <option value="2">Season 02</option>
                <option value="3">Season 03</option>
                <option value="4">Season 04</option>
                <option value="5">Season 05</option>
                <option value="6">Season 06</option>
                <option value="7">Season 07</option>
                <option value="8">Season 08</option>
                <option value="9">Season 09</option>
                <option value="10">Season 10</option>
            </Select>
            {data.map((episode: EpisodeData) => {
                const {number, title, writers, originalAirDate, desc, id } = episode;
                
                return (
                    <Card key={`futurama-episode-${id}`}>
                        <ul>
                            <Title key={`episode-title-${id}`}>{title}</Title>
                            <li key={`episode-number-${id}`}><Item>Episode</Item> #{number}</li>
                            <li key={`episode-airdate-${id}`}><Item>Aired Date</Item> {originalAirDate}</li>
                            <li key={`episode-writer-${id}`}><Item>Written by</Item> {writers}</li>
                            <Desc key={`episode-desc-${id}`}>{desc}</Desc>
                        </ul>
                    </Card>
                )
            })}
            <Button onClick={handleClick}>Top</Button>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr;
    box-sizing: border-box;
    gap: 20px;
    @media (max-width: ${MEDIA_QUERY_ENDPOINT.LAPTOP}) {
        margin: 0 10vw;
    }
`

const Select = styled.select`
    width: 100px;
    font-size: 1rem;
`

const Card = styled.div`
    background-color: rgb(103, 217, 219, 20%);
    padding: 20px;
    border-radius: 10px;
    
`
const Item = styled.dt`
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-block;
    padding-bottom: 5px;
    margin-bottom: 5px;
`

const Title = styled.li`
    font-size: 1.3rem;
    color: #3C5659;
    font-weight: 500;
    margin-bottom: 10px;
`
const Desc = styled.li`
    font-size: 1.2rem;
    line-height: 150%;
`

const Button = styled.button`
    position: fixed;
    bottom: 5vh;
    right: 3vw;
    width: 50px;
    height: 50px;
    font-size: 1rem;
    border: solid 1px rgb(103, 217, 219, 20%);
    background-color: rgb(103, 217, 219, 20%);
    border-radius: 100%;
    color: #3C5659;
    opacity: 45%;
    &:hover {
        cursor: pointer;
        opacity: 100%;
        font-weight: 500;
        transition: .1s;
    }
`

export default EpisodeIndexPage;
