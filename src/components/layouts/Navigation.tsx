import Link from "next/link"

interface ROUTE {
    ID: number,
    PATH: string,
    LABEL: string,
    SUBS?: Array<ROUTE>
}

export const Navigation = () => {
    return (
        <header>
            <h1>Futurama Info</h1>
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>Character</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}
