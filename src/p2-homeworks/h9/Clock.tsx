import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {Typography} from "@material-ui/core";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const hours = date ? (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' : '' // fix with date
    const minutes = date ? (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' : '' // fix with date
    const seconds = date ? (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) : '' // fix with date
    const stringDate = date ? date.toLocaleDateString() : '' // fix with date

    return (
        <div>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Typography variant="h2" gutterBottom component={'span'}>
                    <Typography variant="h2" gutterBottom component={'span'}>
                        {hours}
                    </Typography>
                    <Typography variant="h2" gutterBottom component={'span'}>
                        {minutes}
                    </Typography>
                    <Typography variant="h2" gutterBottom component={'span'}>
                        {seconds}
                    </Typography>
                </Typography>
            </div>
            {show && (<div>
                <Typography>
                {stringDate}
                </Typography>
            </div>)}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop} red>stop</SuperButton>
        </div>

    )
}

export default Clock
