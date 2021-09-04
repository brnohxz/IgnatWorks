import React from 'react'
import MessageCSS from './Message.module.css'

export type MessageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

// type DateTimePropsType = {
//     hours: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12,
//     mins: number
// }

// let mins = (Array.from(Array(61).keys())).map(myNumber => {
//     let formattedNumber = myNumber.toLocaleString('en-US', {
//         minimumIntegerDigits: 2,
//         useGrouping: false
//     })
//     return formattedNumber
// })
// console.log(mins)

function Message(props: MessageDataPropsType) {
    return (
        <div>
            <div className={`${MessageCSS.chat}`}>
                <div className={`${MessageCSS.yours} ${MessageCSS.messages}`}>
                    <div className={MessageCSS.MessageWrapper}>
                        <img alt={'/'} className={MessageCSS.userPNG}
                             src={`${props.avatar}`}/>
                        <span className={MessageCSS.senderName}>Adam</span>
                        <div className={`${MessageCSS.message} ${MessageCSS.last}`}>
                            {props.message}
                        </div>
                        <span className={MessageCSS.senderName}>{props.name}</span>
                        <span className={MessageCSS.MessageTime}>{props.time}</span>
                    </div>
                </div>
                {/*<div className={`${MessageCSS.mine} ${MessageCSS.messages}`}>*/}
                {/*    <div className={`${MessageCSS.message}`}>*/}
                {/*        Great thanks!*/}
                {/*    </div>*/}
                {/*    <div className={`${MessageCSS.message} ${MessageCSS.last}`}>*/}
                {/*        How about you?*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Message
