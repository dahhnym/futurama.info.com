import type { NextPage } from 'next'
import Link from 'next/link';

import styled from '@emotion/styled';

const MainPage: NextPage = () => {
    return (
        <div>
            <Title>Welcome to Futurama.info!</Title>
        </div>
    )
}

export default MainPage;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: teal;
`

