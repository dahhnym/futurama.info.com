import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { API_ENDPOINT } from '../constants'
import { InventoryData } from "../types/inventory";

const InventoryPage: NextPage = () => {
    const route = 'inventory';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);
    
    if(error) return <Error />
    if(!data) return <Loading />
    
    return (
        <div>
            <Heading>Futurama Inventory</Heading>
            <Container>
                <ItemListContainer>
                    <ItemList>
                        {data.map((item: InventoryData)=>{
                            const { title, category, description, slogan, price, stock, id} = item;
                            return (
                                <Item key={`futurama-inventory-${id}`}>
                                    <Title>{title}</Title>
                                    <p>{category}</p>
                                    <p>{description}</p>
                                    <p>{slogan}</p>
                                    <p>{price}</p>
                                    <p>{stock}</p>
                                </Item>
                            )
                        })}
                    </ItemList>
                </ItemListContainer>
                <ButtonContainer>
                    <Button type="button">Add</Button>
                    <Button type="button">Remove</Button>
                </ButtonContainer>
                <AddedItemListContainer>
                    <AddedItemList>
                        No item added
                    </AddedItemList>
                </AddedItemListContainer>
            </Container>
        </div>
    )
}

export default InventoryPage;

const Heading = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 10% 30%;
    margin: 0 auto;
`

const ItemListContainer = styled.div`
    grid-column: 1 / 2;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 3px 10px #566573;
    height: 75vh;
    overflow: hidden;
`

const ItemList = styled.div`
    margin: 10px;
    overflow: hidden visible;
    height: 100%;
`

const Item = styled.div`
    margin-bottom: 10px;
    &:hover{
        background-color: rgb(103, 217, 219, 20%);
        cursor: pointer;
    }
`


const AddedItemListContainer = styled.div`
    grid-column: 3 / 4;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 3px 10px #566573;
    height: 75vh;
    overflow: hidden;
`

const AddedItemList = styled.div`
    margin: 10px;
    overflow: hidden visible;
    height: 100%;
`

const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: #3C5659;
`

const Button = styled.button`
    border: solid 1px #5fd1d1;
    background-color: #5fd1d1;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    color: #000;
    display: block;
    margin: 10px;
    box-sizing: border-box;
    width: 80px;
    &:hover{
        cursor: pointer;
        font-weight: 500;
    }
`

const ButtonContainer = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

