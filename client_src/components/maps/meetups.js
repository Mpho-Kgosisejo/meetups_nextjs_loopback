import Link from "next/link"
import {List, Item} from "semantic-ui-react"

const mapMeetups = meetups => meetups.map(({id, name, city, address}) => {
    return {
        childKey: id,
        header: (
            <Link href={`/meetup?id=${id}`}>
                <Item.Header as="a">{name}</Item.Header>
            </Link>
        ),
        description: `City: ${city} - Address: ${address}`
    }
})

export default ({meetups}) => (
    <Item.Group items={mapMeetups(meetups)} />
)

// export default ({meetups}) => (
//     <List>
//         {meetups.map((meetup) => (
//             <List.Item key={meetup.id}>
//                 <Link href={`meetup?id=${meetup.id}`}>
//                     <List.Header as="a">{meetup.name}</List.Header>
//                 </Link>
//                 City: {meetup.city} | Address: {meetup.address}
//             </List.Item>
//         ))}
//     </List>
// )