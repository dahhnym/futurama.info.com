import type { NextPage } from 'next'
import Link from 'next/link';

const MainPage: NextPage = () => {
    return (
        <div>
            <h1>Welcome to Futurama.info!</h1>
            <ul>
                <li>
                    <Link href="character">
                        <a>Character</a>
                    </Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default MainPage;