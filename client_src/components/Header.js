import {Container, Menu} from "semantic-ui-react"
import Link from "next/link"

const Header = () => (
    <Menu style={{background: "#ddd"}}>
        <Container>
            <Link href="/" prefetch passHref>
                <Menu.Item as="a">Home</Menu.Item>
            </Link>

            <Link href="/addmeetup" prefetch passHref>
                <Menu.Item as="a">Add Meetup</Menu.Item>
            </Link>

            <Link href="/about" prefetch passHref>
                <Menu.Item as="a">About</Menu.Item>
            </Link>
        </Container>
    </Menu>
)

export default Header;