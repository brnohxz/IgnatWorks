import React, {useState} from 'react'
import './styles.scss'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


function AlternativeClock() {
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

    const hours = date ? date.getHours() : 0
    const minutes = date ? date.getMinutes() : 0
    const seconds = date ? date.getSeconds() : 0

    const secondsStyle = {
        transform: `rotate(${+seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${+minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${+hours * 30}deg)`
    };

    return (
        <div>
            <div className={"clock"}>
                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle} />
                    <div className={"dial minutes"} style={minutesStyle} />
                    <div className={"dial hours"} style={hoursStyle} />
                    <div className={"centralDot"}></div>
                </div>
            </div>
            <div>
                <SuperButton onClick={start}>Start</SuperButton>
                <SuperButton red onClick={stop}>Stop</SuperButton>
            </div>
        </div>
    )
}

export default AlternativeClock
