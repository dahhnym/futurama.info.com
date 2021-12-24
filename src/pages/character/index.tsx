import { NextPage } from "next";
import { fetcher } from "../../utils/fetcher";
import useSWR from "swr";
import { CharacterData } from "../../types/characters";
import styled from "@emotion/styled";
import { Error, Loading } from "../../components/"

const CharacterIndexPage: NextPage =  () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/characters', fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Button href="./">Back</Button>
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

export default CharacterIndexPage;