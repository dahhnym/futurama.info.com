import { NextPage } from "next";
import { fetcher } from "../../utils/fetcher";
import useSWR from "swr";
import { CharacterData } from "../../types/characters";
import styled from "@emotion/styled";
import { Error, Loading } from "../../components"
import { API_ENDPOINT } from '../../constants'

const CharacterIndexPage: NextPage =  () => {
    const route = 'characters';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Container>
                {data.map((character: CharacterData) => {
                    const { id, images, name, sayings, gender, species, homePlanet, occupation } = character;
                    const randomNum = Math.floor(Math.random() * sayings.length);
                    return (
                        <CardContainer key={`futurama-character-${id}`}>
                            <Card>
                                <ImageContainer>
                                    <ProfilePic src={images.main} alt="" />
                                </ImageContainer>
                                <h1>{name.first} {name.middle} {name.last}</h1>
                            </Card>
                            <Overlay>
                                <ItemList>
                                    <Name>{name.first} {name.middle} {name.last}</Name>
                                    <li>{gender}</li>
                                    <li>{species}</li>
                                    <li>{homePlanet}</li>
                                    <li>{occupation}</li>
                                <blockquote>
                                    <p>“{sayings[randomNum]}”</p>
                                </blockquote>
                                </ItemList>
                            </Overlay>
                        </CardContainer>
                    )    
                })}
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`

const Overlay = styled.div`
    display: none;
`

const ItemList = styled.ul`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Card = styled.div`
    &:hover {
        display:none;
    }
`
const ImageContainer = styled.div`
    height: 416px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ProfilePic = styled.img`
    max-height: 416px;
    object-fit: contain;
    
`

const CardContainer = styled.div`
    min-width: 300px;
    height: 456px;
    display: block;
    margin: 0 auto;
    border: solid 2px #f2f2f2;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    perspective: 500px;
    &:hover {
        background: linear-gradient(#DD171B,#8D1015);
        border: solid 3px #FDFE95;
        box-shadow: 0px 00px 10px #333;
        box-sizing: border-box;
        color: #fff;
        transition: .2s;
        width: 300px;
        div:first-child {
            display: none;
        }
        div:last-child {
            object-fit: contain;
            display: block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            dl {
                display: flex;
                height: 300px;
                flex-direction: column;
                justify-content: space-evenly;
            }
        }
    }
`

const Name = styled.li`
    margin: 0 auto;
    border-bottom: solid 1px #fff;
    padding-bottom: 10px;
    font-weight: 500;
    
`

export default CharacterIndexPage;