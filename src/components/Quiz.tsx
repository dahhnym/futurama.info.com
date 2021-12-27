import useSWR from 'swr';
import { Error, Loading } from '../components';
import { API_ENDPOINT } from '../constants';
import styled from "@emotion/styled";
import { fetcher } from '../utils/fetcher';
import { QuizData } from '../types/questions';

export const Quiz = () => {
    const route = 'questions';
    const { data, error } = useSWR(`${API_ENDPOINT}${route}`, fetcher);
    
    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <Container>
                {data.map((quiz: QuizData) => {
                const { id, question, possibleAnswers, correctAnswer } = quiz;

                    return (
                        <div key={`futurama-quiz-${id}`}>
                            <p key={`quiz-question-${id}`}>{question}</p>
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
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

const Container = styled.div`
    border: solid 1px black;
`

