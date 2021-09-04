import React, {useState} from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {Navbar} from "../../../p2-homeworks/h5/Navbar";
import {Sidebar} from "../../../p2-homeworks/h5/Sidebar";


function App() {
    const [sideBarStatus,setSideBarStatus] = useState(false)
    return (
        <div className={s.App}>
            <Navbar openSideBar={setSideBarStatus}/>
            <Sidebar isOpen={sideBarStatus}/>
            <HW5/>
        </div>
    )
}

export default App
