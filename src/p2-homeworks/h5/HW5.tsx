import React from 'react'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.hw5}>
                <HashRouter>
                    <Routes/>
                </HashRouter>
        </div>
    )
}

export default HW5
