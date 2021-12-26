import { NextPage } from "next";
import styled from "@emotion/styled";
import { css } from "@emotion/css"
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { InfoData } from '../types/info';
import Link from "next/link";

const InfoPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/info', fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Image src="https://resizing.flixster.com/DXuKUIDKGNjh8PmejB406KwtOcQ=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p9932851_b_h9_ab.jpg" alt="Futurama Cover Image" />
            {data.map((info: InfoData) => {
                const {synopsis, yearsAired, creators, id } = info;
    
                return (
                    <div key={`futurama-showinfo-${id}`}>
                        <Heading>Years Aired</Heading>
                        <Content>{yearsAired}</Content>
                        <Heading>Creators</Heading>
                        <Content>
                            <Link href={creators[0].url}>
                                <a>{creators[0].name}, </a>
                            </Link> 
                        </Content>
                        <Heading>Synopsis</Heading>
                        <Content>{synopsis}</Content>
                    </div>
                )
            })}
        </div>
    )
}

const Heading = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: solid 3px #5FD1D1;
    display: inline-block;
    padding-bottom: 7px;
    margin-bottom: 10px;
`
const Image = styled.img`
    display: block;
    width: 40vw;
    margin: 20px auto 50px;
`

const Content = styled.p`
    font-size: 1rem;
    line-height: 180%;
    margin-bottom: 20px;
`

export default InfoPage;
