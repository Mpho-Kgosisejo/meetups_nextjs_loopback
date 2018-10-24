import {Header, Icon, Divider, Form, Button, Message, } from "semantic-ui-react"

import Layout from "../components/Layout";
import {addMeetup} from "../lib/data"
import {AlertMessage} from "../components/AlertMessage"

export default class AddMeetup extends React.Component {
    state = {
        name: "",
        city: "",
        address: "",
        alertMessage: {
            title: "",
            message: "",
            isSuccess: false
        }
    }

    _handleOnChangeInputs = (element, {target: {value}}) => {
        switch (element) {
            case "name":
                this.setState({
                    name: value
                })
                break;
            case "city":
                this.setState({
                    city: value
                })
                break;
            case "address":
                this.setState({
                    address: value
                })
                break;
        }
    }

    _handleOnClick = async () => {
        const {name, city, address} = this.state
        const meetup = {
            name: name,
            city: city,
            address: address
        }

        // Error handling...
        if (meetup.name.length < 1){

            this.setState({
                alertMessage: {
                    title: "Empty field",
                    message: "Input name can not be empty",
                    isSuccess: false
                }
            })
            return
        }

        const res = await addMeetup(meetup)
        
        if (res.ok == true && res.status == 200){
            this.setState({
                name: "",
                city: "",
                address: "",
                alertMessage: {
                    title: "",
                    message: "Meetup successfully added",
                    isSuccess: true
                }
            })
        } else {
            console.error("[_handleOnClick()] =>", res.statusText)
            this.setState({
                alertMessage: {
                    title: "Request Error",
                    message: res.statusText,
                    isSuccess: false
                }
            })
        }
    }

    render(){
        const {name, city, address, alertMessage} = this.state

        return (
            <Layout title="About">
                <Header as="h2">
                    <Icon name="meetup" />
                    <Header.Content>Add MeetUp</Header.Content>
                </Header>

                <Divider />

                <Form>
                    {alertMessage.message.length > 0 ? <AlertMessage isSuccess={alertMessage.isSuccess} header={alertMessage.title} content={alertMessage.message} /> : null}

                    <Form.Field>
                        <label>Meetup Name:</label>
                        <input placeholder="Meetup name" value={name} onChange={e => this._handleOnChangeInputs("name", e)} />
                    </Form.Field>

                    <Form.Group widths="equal">
                        <Form.Input fluid label="City:" placeholder="City" value={city} onChange={e => this._handleOnChangeInputs("city", e)} />
                        <Form.Input fluid label="Address:" placeholder="Address" value={address} onChange={e => this._handleOnChangeInputs("address", e)} />
                    </Form.Group>
                    <Form.Button onClick={e => this._handleOnClick(e)}>Add</Form.Button>
                </Form>
            </Layout>
        )
    }
}