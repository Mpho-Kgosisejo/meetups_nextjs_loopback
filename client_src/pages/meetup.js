import Router from "next/router"

import {getMeetup} from "../lib/data"
import Layout from "../components/Layout";
import { Card, Header, Icon, Divider} from "semantic-ui-react";

export default class Meetuo extends React.Component {
    static async getInitialProps(props){

        if (props && props.query.id){
            const res = await getMeetup(props.query.id)
            const data = await res.json()
            
            if (!data.error){
                return ({meetup: data})
            }
        }

        if (props && props.req){
            console.log("Sever side...")

            props.res.writeHead(301, {Location: "/"})
            props.res.end()
        } else {
            console.log("Client side...")

            Router.push("/")
        }
        return ({})
    }

    render(){
        const meetup = this.props.meetup

        return (
            <Layout title="Meetup">
                <Header as="h2">
                    <Icon name="meetup" />
                    <Header.Content>Meetup</Header.Content>
                </Header>

                {/* <pre>{JSON.stringify(meetup, "\t", 2)}</pre> */}
                
                <Divider />

                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Header>{meetup.name}</Card.Header>
                            <Card.Meta>{meetup.city} | {meetup.address}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Layout>
        )
    }
}