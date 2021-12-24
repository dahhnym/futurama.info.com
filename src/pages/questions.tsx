import { NextPage } from "next";
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { Error, Loading } from '../components'
import { API_ENDPOINT } from '../constants'
import { QuizData } from "../types/questions";

const QuizPage: NextPage = () => {
    const route = 'questions';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Button href="./">Back</Button>
            <Heading>This is Quiz Page.</Heading>
            {data.map((quiz: QuizData) => {
                const { question, possibleAnswers, correctAnswer, id} = quiz;
                return (
                    <div key={`futurama-question-${id}`}>
                        <p>Question: {question}</p>
                        <p>Option: {possibleAnswers}</p>
                        <p>Answer: {correctAnswer}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default QuizPage;

const Heading = styled.h1`
    margin: 10px;
    font-size: 30px;
    font-weight: 600;
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

