import Link from 'next/link'

const Nav = () => (
    <div>
        <Link href="/">
            <a>Index</a>
        </Link>
        <Link href="/natours">
            <a>Natours</a>
        </Link>
        <Link href="/nexter">
            <a>Nexter</a>
        </Link>
        <Link href="/sickfits">
            <a>Sickfits</a>
        </Link>
        <Link href="/vtbase">
            <a>Vtbase</a>
        </Link>
        <Link href="/vtbasesecond">
            <a>Vtbase2</a>
        </Link>
    </div>
)

export default Nav