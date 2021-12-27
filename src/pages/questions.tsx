import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { API_ENDPOINT } from '../constants'
import { Quiz } from "../components/Quiz";
import React, { useEffect, useState } from "react";


const QuestionsPage: NextPage = () => {
    const route = 'questions';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);
    const [visible, setVisible] = useState(false);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            {!visible && 
            <div>
                <ImageContainer>
                    <Image src="https://drewscave.files.wordpress.com/2014/12/futurama-logo-with-characters.png" alt="Quiz Intro Image" />
                    <TextImage>Quiz!</TextImage>
                </ImageContainer>
                <Button onClick={() => {
                    setVisible(!visible)
                }}>Start</Button>
            </div>
            }
            {visible && <Quiz />}
        </div>
    )
}




const Image = styled.img`
    display: block;
    margin: 0 auto;
    height: 60vh;
    margin: 10vh auto 0;
`

const TextImage = styled.p`
    position: absolute;
    font-size: 8em;
    right: 300px;
    bottom: 0px;
    transform: rotate(-20deg) skew(20deg);
    padding: 5px;
    color: #F1FF8E;
    text-shadow:  -5px -5px 0 #DA171B,
    1px -1px 0 #BE1419,
    -5px 5px 0 #000,
    1px 1px 0 #000;
`

const ImageContainer = styled.div`
    position: relative;
    min-width: 1200px;
`
const Button = styled.button`
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 2rem;
    padding: 10px 15px;
    border-radius: 5px;
    background: radial-gradient(#DD171B,#8D1015);
    color: #FDFE95;
    border: solid 1px #8D1015;
    &:hover{
        cursor: pointer;
        background: radial-gradient(#8D1015,#DD171B);
        border: solid 1px #DD171B;
    }
`
export default QuestionsPage;
