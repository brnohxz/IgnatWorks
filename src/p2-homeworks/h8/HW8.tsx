import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'
// export type UserType =
export type initialPeopleObject = {
    _id: number
    name: string
    age: number
}
const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<initialPeopleObject[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: initialPeopleObject) => (
        <div key={p._id} className={s.tableItem}>
            <div>
                {p.name}
            </div>
            <div>
                {p.age}
            </div>
        </div>
    ))

    const sortAdult = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))
    const sortUP = () => setPeople(homeWorkReducer(initialPeople,sortUpAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople,sortUpAC('down')))
    return (
        <div style={{minWidth:250}}>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div className={s.tableWrap}>{finalPeople}</div>
            <div className={s.buttonGroup}>
            <div><SuperButton onClick={sortAdult}>sort adult</SuperButton></div>
            <div><SuperButton onClick={sortUP}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
