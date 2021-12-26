import type { NextPage } from 'next'
import Link from 'next/link';

import styled from '@emotion/styled';

const MainPage: NextPage = () => {
    return (
        <div>
            <Image src="https://drewscave.files.wordpress.com/2014/12/futurama-logo-with-characters.png" alt="" />
        </div>
    )
}

export default MainPage;

const Image = styled.img`
    height: 60vh;
    display: block;
    margin: 10vh auto 0;
`
