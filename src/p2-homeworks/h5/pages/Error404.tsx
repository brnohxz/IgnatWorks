import React from 'react'
import {Container, Typography} from "@material-ui/core";

function Error404() {
    return (
        <div>
            <Container maxWidth="sm">
                <Typography align='center' variant="h1" component="h2" gutterBottom>404</Typography>
                <Typography align='center' variant="h2" gutterBottom>
                    Page not found
                </Typography>
            </Container>
        </div>
    )
}

export default Error404
