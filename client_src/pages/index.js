import Link from "next/link"
import {List} from "semantic-ui-react"
import fetch from "isomorphic-unfetch"
import Meetups from "../components/maps/meetups"
import Layout from "../components/Layout"
import {getMeetups} from "../lib/data"
import {Header, Icon, Divider} from "semantic-ui-react"

const Index = (props) => (
    <Layout title="Home">
        <Header as="h2">
            <Icon name="meetup" />
            <Header.Content>Meetups</Header.Content>
        </Header>

        <Divider />

        {/* Data: <pre>{JSON.stringify(props.meetups, "\t", 2)}</pre> */}

        <Meetups {...props} />

        {/* <List>
            {props.meetups.map((meetup) => (
                <List.Item key={meetup.id}>
                    <Link href={`meetup?id=${meetup.id}`}>
                        <List.Header as="a">{meetup.name}</List.Header>
                    </Link>
                    City: {meetup.city} | Address: {meetup.address}
                </List.Item>
            ))}
        </List> */}
    </Layout>
)

Index.getInitialProps = async function(){
    const res = await getMeetups()
    const data = await res.json()

    // console.log("data: ", data)

    return ({meetups: data})
}

export default Index