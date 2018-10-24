import fetch from "isomorphic-unfetch"

const endPoint = "http://localhost:3001/api"

export function getMeetups() {
    return (fetch(`${endPoint}/meetups`))
}

export function getMeetup(id) {
    return (fetch(`${endPoint}/meetups/${id}`))
}

export function deleteMeetup(id){
    return (fetch(`${endPoint}/meetups/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })).then(res => {
        return (res)
    })
}

export function addMeetup(meetup){
    return (fetch(`${endPoint}/meetups`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(meetup)
    }).then(res => {
        return (res)
    }))
}