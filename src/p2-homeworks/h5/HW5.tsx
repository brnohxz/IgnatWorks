import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>
                {/*{Здесь мы оставим нав линки}*/}

            <Routes/>
                {/*{Здесь будет отрисовка самой компоненты}*/}
            </HashRouter>
        </div>
    )
}

export default HW5
