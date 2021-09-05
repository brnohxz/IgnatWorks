import React from 'react'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import {Container} from "@material-ui/core";

function HW5() {
    return (
        <div>
            <Container maxWidth="sm">
                <HashRouter>
                    <Routes/>
                </HashRouter>
            </Container>
        </div>
    )
}

export default HW5
