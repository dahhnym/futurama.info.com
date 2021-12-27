import type { NextPage } from 'next'
import { HOMEPAGE_IMAGE_URL } from '../constants';
import styled from '@emotion/styled';

const HomePage: NextPage = () => {
    return (
        <div>
            <Image src={HOMEPAGE_IMAGE_URL} alt="" />
        </div>
    )
}

export default HomePage;

const Image = styled.img`
    height: 60vh;
    display: block;
    margin: 10vh auto 0;
`