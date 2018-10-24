import {Message} from "semantic-ui-react"

export function AlertMessage ({header, content, isSuccess}){
    if (isSuccess){
        return (<Message positive header={header} content={content} />)
    } else {
        return (<Message negative header={header} content={content} />)
    }
}