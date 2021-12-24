import type { NextPage } from 'next'
import Link from 'next/link';

import styled from '@emotion/styled';

const MainPage: NextPage = () => {
    return (
        <div>
            <Title>Welcome to Futurama.info!</Title>
            <ul>
                <li>
                    <Link href="info">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="character">
                        <a>Character</a>
                    </Link>
                </li>
                <li>
                    <Link href="cast">
                        <a>Cast</a>
                    </Link>
                </li>
                <li>
                    <Link href="episodes">
                        <a>Episodes</a>
                    </Link>
                </li>
                <li>
                    <Link href="questions">
                        <a>Quiz</a>
                    </Link>
                </li>
                <li>
                    <Link href="inventory">
                        <a>Inventory</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MainPage;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: teal;
`

