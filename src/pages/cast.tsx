import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { CastData } from "../types/cast";
import Link from "next/link";
import { API_ENDPOINT, CASTIMAGE_ENDPOINT, CASTIMAGE_ROUTES } from "../constants";

interface CASTIMAGE_ROUTE {
    ID: number,
    PATH: string,
    LABEL: string,
}

const CastPage: NextPage = () => {
    const route = 'cast';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);

    if(error) return <Error />
    if(!data) return <Loading />



    return (
        <div>
            <Container>
                {data.map((cast: CastData) => {
                    const {name, born, bio, id } = cast;
                    
                    return (
                        <Card key={`futurama-cast-${id}`}>
                            <Link href={bio.url}>
                                <a   target="_blank" rel="noopener noreferrer">
                                    <Image src={`${CASTIMAGE_ENDPOINT}${CASTIMAGE_ROUTES[id-1].PATH}`} alt="" />
                                    <div>
                                        <Name>{name}</Name><Icon>IMDb</Icon>
                                    </div>
                                    <p><Subitem>Born</Subitem> {born}</p>
                                </a>
                                </Link>
                        </Card>
                    )
                })}
            </Container>
        </div>
    )
}


const Name = styled.h1`
    display: inline-block;
    margin: 10px 5px;
    font-size: 1.2rem;
    font-weight: 600;
`
const Icon = styled.span`
    border: solid 1px #EDBF17;
    background-color: #EDBF17;
    font-weight: 500;
    padding: 3px;
    border-radius: 3px;
    font-size: 0.7rem;
    margin-bottom: 10px;
`

const Subitem = styled.span`
    font-weight: 500;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`
const Card = styled.div`
    border: solid 2px #f2f2f2;
    border-radius: 5px;
    min-width: min-content;
    width: 20vw;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    &:hover{
        box-shadow: 0px 0px 5px #aaa;
        transition: .2s;
    }
`

const Image = styled.img`
    width: 214px;
`




export default CastPage;
