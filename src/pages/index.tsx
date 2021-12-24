import type { NextPage } from 'next'
import Link from 'next/link';
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { InfoData } from '../types/info';
import styled from '@emotion/styled';

const MainPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/info', fetcher);


    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Title>Welcome to Futurama.info!</Title>
            <ul>
                <li>
                    <Link href="info">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="character">
                        <a>Character</a>
                    </Link>
                </li>
                <li>Cast
                </li>
                <li>
                    <Link href="episodes">
                        <a>Episodes</a>
                    </Link>
                </li>
                <li>
                    <Link href="questions">
                        <a>Quiz</a>
                    </Link>
                </li>
                <li>
                    <Link href="inventory">
                        <a>Inventory</a>
                    </Link>
                </li>
            </ul>

            {data.map((info: InfoData) => {
                const {synopsis, yearsAired, creators, id } = info;

                return (
                    <div key={`futurama-showinfo-${id}`}>
                        <Synopsis>synopsis: {synopsis}</Synopsis>
                        <YearsAired>yearsAired: {yearsAired}</YearsAired>
                        <p>{creators[0].name}</p>
                        <p>{creators[1].name}</p>
                    </div>
                )
            })}


        </div>
    )
}

export default MainPage;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: teal;
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