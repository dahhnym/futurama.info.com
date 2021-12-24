import { NextPage } from "next";
import axios from "axios";
import useSWR from "swr";
import { CharacterData } from "../../types/characters";
import styled from "@emotion/styled";

const fetcher = ( url: string) => axios(url).then((res) => res.data); 

const CharacterIndexPage: NextPage =  () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/characters', fetcher);

    if(error) return <div>An error occurred...</div>
    if(!data) return <div>Loading...</div>

    return (
        <div>
            <Container>
                {data.map((character: CharacterData) => {
                    const { id, images, name } = character;

                    return (
                        <Card key={`futurama-character-${id}`}>

                            <ProfilePic src={images.main} alt="" />
                            <h1>{name.first} {name.middle} {name.last}</h1>
                        </Card>
                    )    
                })}
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const Card = styled.div`
    max-width: 380px;
`

const ProfilePic = styled.img`
    max-width: 20vw;
`

export default CharacterIndexPage;