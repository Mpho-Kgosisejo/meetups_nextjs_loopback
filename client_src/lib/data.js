import fetch from "isomorphic-unfetch"

export function getMeetups() {
    return (fetch("http://localhost:3001/api/meetups"))
}

export function getMeetup(id) {
    return (fetch(`http://localhost:3001/api/meetups/${id}`))
}