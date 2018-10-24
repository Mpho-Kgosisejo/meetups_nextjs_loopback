import Link from "next/link"
import fetch from "isomorphic-unfetch"
import {Header, Icon, Divider, List, Button, Confirm} from "semantic-ui-react"

import Meetups from "../components/maps/meetups"
import {deleteMeetup} from "../lib/data"
import Layout from "../components/Layout"
import {getMeetups} from "../lib/data"
import {AlertMessage} from "../components/AlertMessage"

export default class Index extends React.Component {
    state = {
        meetups: [],
        isDelete: false,
        meetupId: 0,
        alertMessage: {
            title: "",
            message: ""
        }
    }

    openConfirm = () => this.setState({isDelete: true})
    closeConfirm = () => this.setState({isDelete: false})

    componentDidMount(){
        getMeetups()
        .then(res => res.json())
        .then(data => {
            this.setState({
                meetups: data
            })
        })
    }
    
    _handleReadyDelete = (id) => {
        this.openConfirm()
        this.setState({
            meetupId: id
        })
    }

    _handleOnDelete = async () => {
        const res = await deleteMeetup(this.state.meetupId)
        this.closeConfirm()

        if (res.ok == true && res.status == 200){
            const res1 = await getMeetups()
            const data = await res1.json()

            if (data.length != this.state.meetups.length){
                this.setState({
                    meetups: data,
                    alertMessage: {
                        title: "Success",
                        message: "Delete success..."
                    }
                })
            }else{
                console.log("No change...")
            }
        } else {
            this.setState({
                alertMessage: {
                    title: "Error Deleting",
                    message: "Something went wrong deleting meetup"
                }
            })
        }
    }

    constructor(props){
        super(props)
    }
    
    static async getInitialProps(){
        return ({})
    }

    render (){
        const {meetups, alertMessage, isDelete} = this.state

        return (
            <Layout title="Home">
                <Confirm open={isDelete} onCancel={this.closeConfirm} onConfirm={this._handleOnDelete} content="Are you sure you want to delete meetup?" />

                <Header as="h2">
                    <Icon name="meetup" />
                    <Header.Content>Meetups</Header.Content>
                </Header>

                <Divider />

                {/* Data: <pre>{JSON.stringify(meetups, "\t", 2)}</pre> */}

                {alertMessage.message.length > 0 ? <AlertMessage isSuccess={true} header={alertMessage.title} content={alertMessage.message} /> : null}

                <List divided relaxed>
                    {meetups.map((meetup) => (
                        <List.Item key={meetup.id}>
                            <List.Content floated="right">
                                <Button size="mini" basic color="red" onClick={() => this._handleReadyDelete(meetup.id)}>Delete</Button>
                            </List.Content>
                            <List.Content>
                                <Link href={`meetup?id=${meetup.id}`}>
                                    <Header>
                                        <List.Header as="a">{meetup.name}</List.Header>
                                    </Header>
                                </Link>
                                <List.Description>City: {meetup.city} | Address: {meetup.address}</List.Description>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
            </Layout>
        )
    }
}