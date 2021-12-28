import useSWR from 'swr';
import { Error, Loading } from '../components';
import { API_ENDPOINT } from '../constants';
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import { QuizData } from '../types/questions';
import { useState } from 'react';

export const Quiz = () => {
    const route = 'questions';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);
    const [visible, setVisible] = useState(false);

    if(error) return <Error />
    if(!data) return <Loading />

    
    const generateRandomNum = () => {
        let randomNum = Math.floor(Math.random() * data.length +1);
        console.log(randomNum);
    }
    return (
        <div>
            <Container>
                {data.map((quiz: QuizData) => {
                const { id, question, possibleAnswers, correctAnswer } = quiz;


                    return (
                        <QuizCard key={`futurama-quiz-${id}`}>
                            <Question key={`quiz-question-${id}`}>{question}</Question>
                            <div key={`quiz-possibleAnswer-${id}`}>
                                {possibleAnswers.map((posAnswer: string) => {
                                    return (
                                        <div key={`possibleAnswer-option-${possibleAnswers.indexOf(posAnswer)}`}>
                                            <input type="radio" id={posAnswer} name={`${id}`} value={posAnswer} />
                                            <label htmlFor={posAnswer}>{posAnswer}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </QuizCard>
                    )
                })}
            </Container>
        </div>
    )
}

const Container = styled.div`
`
const Question = styled.h1`
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 10px;
`


const QuizCard = styled.div`
    border: solid 1px rgb(103, 217, 219, 20%);
    background-color: rgb(103, 217, 219, 20%);
    margin: 10px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
`

