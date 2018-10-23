import Head from "next/head"
import {Container} from "semantic-ui-react"

import Header from "./Header";

const Layout = ({children, title = ""}) => (
    <dev>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            {/* If you online... */}
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.0/semantic.min.css" />
            {/* If you offline... */}
            {/* <link rel="stylesheet" href="/static/css/semantic-2.3.0.min.css" /> */}
            
            <title>{title}</title>
        </Head>

       <div>
            <Header />

            <Container>
                {children}
            </Container>

       </div>
    </dev>
)

export default Layout