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
                <Title>Pop Quiz!</Title>
                <img src="" alt="Quiz Intro Image" />
                <button onClick={() => {
                    setVisible(!visible)
                }}>Start</button>
            </div>
            }
            {visible && <Quiz />}
        </div>
    )
}

export default QuestionsPage;

const Title = styled.h1`
    font-size: 1.5rem;
`
