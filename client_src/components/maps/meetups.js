import Link from "next/link"
import {List, Item, Divider, Header, Button} from "semantic-ui-react"

// export default class MeetupCell extends React.Component {
//     render (){
//         return (
//             <List divided relaxed>
//                 {meetups.map((meetup) => (
//                     <List.Item key={meetup.id}>
//                         <List.Content floated="right">
//                             <Button size="mini" basic color="red">Delete</Button>
//                         </List.Content>
//                         <List.Content>
//                             <Link href={`meetup?id=${meetup.id}`}>
//                                 <Header>
//                                     <List.Header as="a">{meetup.name}</List.Header>
//                                 </Header>
//                             </Link>
//                             <List.Description>City: {meetup.city} | Address: {meetup.address}</List.Description>
//                         </List.Content>
//                     </List.Item>
//                 ))}
//             </List>
//         )
//     }
// }

export default ({meetups}) => (
    <List divided relaxed>
        {meetups.map((meetup) => (
            <List.Item key={meetup.id}>
                <List.Content floated="right">
                    <Button size="mini" basic color="red">Delete</Button>
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
)

// const mapMeetups = meetups => meetups.map(({id, name, city, address}) => {
//     return {
//         childKey: id,
//         header: (
//             <Link href={`/meetup?id=${id}`}>
//                 <Item.Header as="a">{name}</Item.Header>
//             </Link>
//         ),
//         description: `City: ${city} - Address: ${address}`
//     }
// })

// export default ({meetups}) => (
//     <Item.Group divided items={mapMeetups(meetups)} />
// )