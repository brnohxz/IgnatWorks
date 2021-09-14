import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
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
    const finalPeople = people.map((p: any) => (
        <div key={p._id} className={s.tableItem}>
            <div>
                {p.name}
            </div>
            <div>
                {p.age}
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))

    return (
        <div style={{minWidth:250}}>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div className={s.tableWrap}>{finalPeople}</div>


            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div>sort down</div>
            check 18

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
