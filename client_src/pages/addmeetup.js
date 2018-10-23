import Layout from "../components/Layout";
import {Header, Icon, Divider, Form} from "semantic-ui-react"

const AddMeetup = () => (
    <Layout title="About">
        <Header as="h2">
            <Icon name="meetup" />
            <Header.Content>Add MeetUp</Header.Content>
        </Header>

        <Divider />

        <Form>
            <Form.Field>
                <label>Meetup Name:</label>
                <input placeholder="Meetup name" />
            </Form.Field>

            <Form.Group widths="equal">
                <Form.Input fluid label="City:" placeholder="City" />
                <Form.Input fluid label="Address:" placeholder="Address" />
            </Form.Group>
            <Form.Button>Add</Form.Button>
        </Form>
    </Layout>
)

export default AddMeetup